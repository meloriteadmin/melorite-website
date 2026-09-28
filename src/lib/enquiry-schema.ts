import { z } from "zod";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { companySizes, enquiryTypes } from "@/data/company";

/** Shared between the client form and the server route — one source of validation truth. */
export const productIds = products.map((p) => p.id) as [string, ...string[]];
export const industryIds = ["other", ...industries.map((i) => i.id)] as [string, ...string[]];
export const preferredTimes = ["morning", "afternoon", "evening", "flexible"] as const;

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  workEmail: z.email("Please enter a valid work email address.").max(200),
  phone: z
    .string()
    .trim()
    .max(40)
    .refine((v) => v === "" || /^[+()\d\s.-]{7,}$/.test(v), "Please enter a valid phone number."),
  companyName: z.string().trim().max(160),
  industry: z.union([z.enum(industryIds), z.literal("")]),
  companySize: z.union([z.enum(companySizes as [string, ...string[]]), z.literal("")]),
  applications: z.array(z.enum(productIds)).max(productIds.length),
  enquiryType: z.enum(enquiryTypes.map((e) => e.value) as [string, ...string[]], { message: "Please choose an enquiry type." }),
  preferredDate: z.string().trim().max(10).optional(),
  preferredTime: z.union([z.enum(preferredTimes), z.literal("")]).optional(),
  currentTools: z.string().trim().max(500).optional(),
  subject: z.string().trim().max(160).optional(),
  message: z.string().trim().min(10, "Please tell us a little more (at least 10 characters).").max(4000),
  consent: z.literal(true, { message: "Please confirm we may contact you about this enquiry." }),
  /** Spam prevention: honeypot must stay empty; startedAt is when the form was rendered. */
  website: z.string().max(500).optional(),
  startedAt: z.number().int().positive(),
}).superRefine((data, ctx) => {
  const isBusinessEnquiry = data.enquiryType !== "general";
  if (isBusinessEnquiry && data.companyName.length < 2) {
    ctx.addIssue({ code: "custom", path: ["companyName"], message: "Please enter your company name." });
  }
  if (isBusinessEnquiry && !data.companySize) {
    ctx.addIssue({ code: "custom", path: ["companySize"], message: "Please select your company size." });
  }
  if ((data.enquiryType === "demo" || data.enquiryType === "industry") && !data.industry) {
    ctx.addIssue({ code: "custom", path: ["industry"], message: "Please select your industry." });
  }
  if (data.enquiryType === "product" && data.applications.length === 0) {
    ctx.addIssue({ code: "custom", path: ["applications"], message: "Please select at least one application." });
  }
  if (data.enquiryType === "general" && (!data.subject || data.subject.length < 3)) {
    ctx.addIssue({ code: "custom", path: ["subject"], message: "Please enter a subject." });
  }
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
