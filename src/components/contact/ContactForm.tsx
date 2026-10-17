"use client";

import { trackEvent } from "@/lib/analytics";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { enquirySchema, type EnquiryInput } from "@/lib/enquiry-schema";
import { enquiryTypes, productInterests } from "@/data/products";

type Status = { state: "idle" } | { state: "success"; reference: string } | { state: "error"; message: string };

const input = "w-full rounded-lg border border-black/12 bg-white px-3 py-2 shadow-[inset_0_1px_2px_rgba(17,23,53,.05)] backdrop-blur text-[14px] outline-none transition-colors placeholder:text-black/35 focus:border-[#5f63f2] focus:ring-[3px] focus:ring-[#5f63f2]/15 aria-[invalid=true]:border-red-500";

function Field({ id, label, optional, error, className, children }: { id: string; label: string; optional?: boolean; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-[13.5px] font-medium">{label}{optional && <span className="text-[12px] font-normal text-black/40">Optional</span>}</label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-[13px] text-red-600"><AlertCircle className="size-3.5" aria-hidden />{error}</p>}
    </div>
  );
}

function ParamsSync({ onParams }: { onParams: (p: URLSearchParams) => void }) {
  const params = useSearchParams();
  useEffect(() => onParams(new URLSearchParams(params.toString())), [params, onParams]);
  return null;
}

export function ContactForm({ defaultType = "demo" }: { defaultType?: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    mode: "onTouched",
    defaultValues: { fullName: "", workEmail: "", phone: "", companyName: "", businessType: "", teamSize: "", products: [], enquiryType: defaultType, preferredDate: "", preferredTime: "", message: "", consent: undefined as unknown as true, website: "", startedAt: 0 },
  });

  useEffect(() => setValue("startedAt", Date.now()), [setValue]);

  const applyParams = useCallback((params: URLSearchParams) => {
    const t = params.get("enquiry") ?? (params.get("type") === "custom-solution" ? "custom" : params.get("type"));
    if (t && enquiryTypes.some((e) => e.value === t)) setValue("enquiryType", t);
    else setValue("enquiryType", defaultType);
    const p = params.get("product");
    if (p && productInterests.some((x) => x.id === p)) setValue("products", [p]);
    else setValue("products", []);
  }, [setValue, defaultType]);

  const onSubmit = async (data: EnquiryInput) => {
    setStatus({ state: "idle" });
    try {
      const res = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; reference?: string; error?: string };
      if (!res.ok || !body.ok || !body.reference) throw new Error(body.error || "We couldn't send your enquiry. Please try again.");
      trackEvent(data.enquiryType === "demo" ? "demo_submit" : "contact_submit");
      if (data.enquiryType === "custom") trackEvent("custom_solution_enquiry");
      setStatus({ state: "success", reference: body.reference });
      reset();
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong. Please try again." });
    }
  };
  const onInvalid = (errs: typeof errors) => {
    if (errs.startedAt || errs.website) setStatus({ state: "error", message: "Please refresh the page and try again." });
  };
  const a11y = (n: keyof EnquiryInput) => ({ "aria-invalid": errors[n] ? true : undefined, "aria-describedby": errors[n] ? `${n}-error` : undefined });

  if (status.state === "success") {
    return (
      <div role="status" aria-live="polite" className="flex min-h-[360px] flex-col items-center justify-center glass rounded-[16px] p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-[#eeeffe] text-[#4b4fe0]"><CheckCircle2 className="size-7" aria-hidden /></span>
        <h3 className="h-card mt-6">Thank you. We’ll be in touch.</h3>
        <p className="mt-3 max-w-[42ch] text-[15.5px] leading-relaxed text-black/55">A member of the Melorite team will review your details and reply to your email address. No pressure, just a friendly conversation.</p>
        <p className="mono-label mt-6 rounded-full bg-black/[.05] px-4 py-1.5 !text-[11px] text-black/60">Reference {status.reference}</p>
        <button type="button" onClick={() => { setValue("startedAt", Date.now()); applyParams(new URLSearchParams(window.location.search)); setStatus({ state: "idle" }); }} className="pill pill-dark mt-5">Send another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate aria-busy={isSubmitting} className="contact-form glass relative rounded-[16px] p-5 sm:p-6">
      <h2 className="text-[24px] font-normal tracking-[-.03em]">{defaultType === "demo" ? "Let’s find your fit." : "How can we help?"}</h2>
      <p className="mt-2 text-[14px] leading-relaxed text-black/50">A few details, and we’ll take it from there.</p>
      <div className="mt-5 grid gap-4">
        <Field id="fullName" label="Your name" error={errors.fullName?.message}><input id="fullName" autoComplete="name" placeholder="Alex Sharma" className={input} {...register("fullName")} {...a11y("fullName")} /></Field>
        <Field id="workEmail" label="Email address" error={errors.workEmail?.message}><input id="workEmail" type="email" inputMode="email" autoComplete="email" placeholder="you@company.com" className={input} {...register("workEmail")} {...a11y("workEmail")} /></Field>
        <Field id="message" label="What would you like help with?" error={errors.message?.message}><textarea id="message" rows={3} className={input} placeholder="A quick line about what you need…" {...register("message")} {...a11y("message")} /></Field>
      </div>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>
      <input type="hidden" {...register("startedAt", { valueAsNumber: true })} />

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-black/60">
          <input type="checkbox" className="mt-1 size-4 accent-[#5f63f2]" {...register("consent")} {...a11y("consent")} />
          I agree that Melorite may contact me about this enquiry.
        </label>
        {errors.consent && <p id="consent-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-[13px] text-red-600"><AlertCircle className="size-3.5" aria-hidden />{errors.consent.message}</p>}
      </div>

      {status.state === "error" && <div role="alert" className="mt-6 flex items-start gap-3 rounded-[4px] bg-red-50 p-4 text-[14px] text-red-700 ring-1 ring-red-200"><AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />{status.message}</div>}

      <div className="mt-5 flex flex-col-reverse items-start gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12.5px] text-black/45">We’ll only use your details to respond to this enquiry.</p>
        <button type="submit" disabled={isSubmitting} className="pill pill-dark h-10 w-full px-7 disabled:opacity-60 sm:w-auto">
          {isSubmitting ? <><Loader2 className="size-4 animate-spin" aria-hidden />Sending…</> : "Send message"}
        </button>
      </div>
      <Suspense fallback={null}><ParamsSync onParams={applyParams} /></Suspense>
    </form>
  );
}
