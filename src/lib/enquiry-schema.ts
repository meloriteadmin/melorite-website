import { z } from "zod";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { companySizes, enquiryTypes } from "@/data/company";

/** Shared between the client form and the server route — one source of validation truth. */
export const productIds = products.map((p) => p.id) as [string, ...string[]];
export const industryIds = ["other", ...industries.map((i) => i.id)] as [string, ...string[]];

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  workEmail: z.email("Please enter a valid work email address.").max(200),
  phone: z
    .string()
    .trim()
    .max(40)
    .refine((v) => v === "" || /^[+()\d\s.-]{7,}$/.test(v), "Please enter a valid phone number."),
  companyName: z.string().trim().min(2, "Please enter your company name.").max(160),
  industry: z.enum(industryIds, { message: "Please select your industry." }),
  companySize: z.enum(companySizes as [string, ...string[]], { message: "Please select your company size." }),
  applications: z.array(z.enum(productIds)).max(productIds.length),
  enquiryType: z.enum(enquiryTypes.map((e) => e.value) as [string, ...string[]], { message: "Please choose an enquiry type." }),
  message: z.string().trim().min(10, "Please tell us a little more (at least 10 characters).").max(4000),
  consent: z.literal(true, { message: "Please confirm we may contact you about this enquiry." }),
  /** Spam prevention: honeypot must stay empty; startedAt is when the form was rendered. */
  website: z.string().max(500).optional(),
  startedAt: z.number().int().positive(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
