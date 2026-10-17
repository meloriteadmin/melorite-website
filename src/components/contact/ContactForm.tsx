"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { enquirySchema, type EnquiryInput } from "@/lib/enquiry-schema";
import { businessTypes, enquiryTypes, preferredTimes, productInterests, teamSizes } from "@/data/products";
import { cn } from "@/lib/utils";

type Status = { state: "idle" } | { state: "success"; reference: string } | { state: "error"; message: string };

const input = "w-full rounded-2xl border border-white/90 bg-white/65 px-4 py-3 shadow-[inset_0_1px_2px_rgba(17,23,53,.05)] backdrop-blur text-[15px] outline-none transition-colors placeholder:text-black/35 focus:border-[#5f63f2] focus:ring-[3px] focus:ring-[#5f63f2]/15 aria-[invalid=true]:border-red-500";

function Field({ id, label, optional, error, className, children }: { id: string; label: string; optional?: boolean; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-[13.5px] font-medium">{label}{optional && <span className="text-[12px] font-normal text-black/40">Optional</span>}</label>
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
  const { register, handleSubmit, reset, setValue, control, formState: { errors, isSubmitting } } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    mode: "onTouched",
    defaultValues: { fullName: "", workEmail: "", phone: "", companyName: "", businessType: "", teamSize: "", products: [], enquiryType: defaultType, preferredDate: "", preferredTime: "", message: "", consent: undefined as unknown as true, website: "", startedAt: 0 },
  });
  const selected = useWatch({ control, name: "products" }) ?? [];
  const type = useWatch({ control, name: "enquiryType" });

  useEffect(() => setValue("startedAt", Date.now()), [setValue]);

  const applyParams = useCallback((params: URLSearchParams) => {
    const t = params.get("enquiry");
    if (t && enquiryTypes.some((e) => e.value === t)) setValue("enquiryType", t);
    const p = params.get("product");
    if (p && productInterests.some((x) => x.id === p)) setValue("products", [p]);
  }, [setValue]);

  const onSubmit = async (data: EnquiryInput) => {
    setStatus({ state: "idle" });
    try {
      const res = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; reference?: string; error?: string };
      if (!res.ok || !body.ok || !body.reference) throw new Error(body.error || "We couldn't send your enquiry. Please try again.");
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
      <div role="status" aria-live="polite" className="flex min-h-[480px] flex-col items-center justify-center glass rounded-[28px] p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-[#eeeffe] text-[#4b4fe0]"><CheckCircle2 className="size-7" aria-hidden /></span>
        <h3 className="h-card mt-6">Thank you. We’ll be in touch.</h3>
        <p className="mt-3 max-w-[42ch] text-[15.5px] leading-relaxed text-black/55">A member of the Melorite team will review your details and reply to your email address. No pressure, just a friendly conversation.</p>
        <p className="mono-label mt-6 rounded-full bg-black/[.05] px-4 py-1.5 !text-[11px] text-black/60">Reference {status.reference}</p>
        <button type="button" onClick={() => { setValue("startedAt", Date.now()); setStatus({ state: "idle" }); }} className="pill pill-dark mt-8">Send another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate aria-busy={isSubmitting} className="glass glass-sheen relative rounded-[28px] p-[clamp(20px,3vw,40px)]">
      <fieldset>
        <legend className="mb-3 text-[13.5px] font-medium">What can we help with?</legend>
        <div role="radiogroup" className="flex flex-wrap gap-2">
          {enquiryTypes.map((t) => (
            <label key={t.value} className={cn("cursor-pointer rounded-full border px-4 py-2 text-[14px] transition-colors has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-[#5f63f2]/25", type === t.value ? "border-[#111735] bg-[#111735] text-white" : "border-black/15 text-black/65 hover:border-black/40")}>
              <input type="radio" className="sr-only" value={t.value} {...register("enquiryType")} />{t.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors.fullName?.message}><input id="fullName" autoComplete="name" className={input} {...register("fullName")} {...a11y("fullName")} /></Field>
        <Field id="workEmail" label="Email" error={errors.workEmail?.message}><input id="workEmail" type="email" inputMode="email" autoComplete="email" className={input} {...register("workEmail")} {...a11y("workEmail")} /></Field>
        <Field id="phone" label="Phone number" optional error={errors.phone?.message}><input id="phone" type="tel" inputMode="tel" autoComplete="tel" className={input} {...register("phone")} {...a11y("phone")} /></Field>
        <Field id="companyName" label="Business name" optional error={errors.companyName?.message}><input id="companyName" autoComplete="organization" className={input} {...register("companyName")} {...a11y("companyName")} /></Field>
        <Field id="businessType" label="Business type" optional error={errors.businessType?.message}><select id="businessType" className={input} {...register("businessType")}><option value="">Choose your business type</option>{businessTypes.map((value) => <option key={value} value={value}>{value === "real-estate" ? "Real estate" : value[0].toUpperCase() + value.slice(1)}</option>)}</select></Field>
        <Field id="teamSize" label="Team size" optional error={errors.teamSize?.message}><select id="teamSize" className={input} {...register("teamSize")}><option value="">Choose team size</option>{teamSizes.map((value) => <option key={value} value={value}>{value} people</option>)}</select></Field>
      </div>

      <fieldset className="mt-8">
        <legend className="mb-3 flex w-full items-baseline justify-between text-[13.5px] font-medium">Products of interest<span className="text-[12px] font-normal text-black/40">Optional</span></legend>
        <div className="flex flex-wrap gap-2">
          {productInterests.map((p) => {
            const on = selected.includes(p.id);
            return (
              <label key={p.id} className={cn("cursor-pointer rounded-xl border px-3 py-2 text-[13.5px] transition-colors has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-[#5f63f2]/25", on ? "border-[#5f63f2] bg-[#eeeffe] text-[#3c3fc4]" : "border-black/15 text-black/65 hover:border-black/40")}>
                <input type="checkbox" className="sr-only" checked={on} onChange={() => setValue("products", on ? selected.filter((x) => x !== p.id) : [...selected, p.id], { shouldDirty: true })} />{p.name}
              </label>
            );
          })}
        </div>
      </fieldset>

      {type === "demo" && (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Field id="preferredDate" label="Preferred date" optional error={errors.preferredDate?.message}><input id="preferredDate" type="date" className={input} {...register("preferredDate")} /></Field>
          <Field id="preferredTime" label="Preferred time" optional error={errors.preferredTime?.message}>
            <select id="preferredTime" className={input} {...register("preferredTime")}>
              <option value="">Choose a time window</option>
              {preferredTimes.map((t) => <option key={t} value={t}>{t === "flexible" ? "I’m flexible" : t[0].toUpperCase() + t.slice(1)}</option>)}
            </select>
          </Field>
        </div>
      )}

      <Field id="message" label="Tell us about your business" error={errors.message?.message} className="mt-8">
        <textarea id="message" rows={5} className={input} placeholder="What kind of business do you run, and what would you like Melorite to help with?" {...register("message")} {...a11y("message")} />
      </Field>

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

      <div className="mt-8 flex flex-col-reverse items-start gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12.5px] text-black/45">We’ll only use your details to respond to this enquiry.</p>
        <button type="submit" disabled={isSubmitting} className="pill pill-dark h-12 w-full px-7 disabled:opacity-60 sm:w-auto">
          {isSubmitting ? <><Loader2 className="size-4 animate-spin" aria-hidden />Sending…</> : "Send enquiry"}
        </button>
      </div>
      <Suspense fallback={null}><ParamsSync onParams={applyParams} /></Suspense>
    </form>
  );
}
