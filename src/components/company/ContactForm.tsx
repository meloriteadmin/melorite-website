"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { AlertCircle, Check, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { products, productCategories } from "@/data/products";
import { industries } from "@/data/industries";
import { companySizes, enquiryTypes } from "@/data/company";
import { enquirySchema, industryIds, productIds, type EnquiryInput } from "@/lib/enquiry-schema";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { buttonClasses, Arrow } from "@/components/shared/Button";

const inputCls =
  "h-12 w-full rounded-[12px] bg-white px-4 text-[15.5px] text-navy ring-1 ring-line-strong transition-shadow placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-500/70";

function Field({ id, label, error, optional, children, className }: { id: string; label: string; error?: string; optional?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-[14px] font-medium text-navy">
        {label}
        {optional && <span className="text-[12.5px] font-normal text-muted">Optional</span>}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p id={`${id}-error`} role="alert" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-center gap-1.5 overflow-hidden pt-2 text-[13px] text-red-600">
            <AlertCircle className="size-3.5 shrink-0" aria-hidden /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

type Status = { state: "idle" } | { state: "success"; reference: string } | { state: "error"; message: string };

/** Reads URL params in its own Suspense boundary so the form itself is server-rendered. */
function ParamsSync({ onParams }: { onParams: (p: URLSearchParams) => void }) {
  const params = useSearchParams();
  useEffect(() => onParams(new URLSearchParams(params.toString())), [params, onParams]);
  return null;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      workEmail: "",
      phone: "",
      companyName: "",
      industry: "",
      companySize: "",
      applications: [],
      enquiryType: "demo",
      message: "",
      consent: undefined as unknown as true,
      website: "",
      startedAt: 0,
    },
  });

  // Stamp render time for the spam check.
  useEffect(() => setValue("startedAt", Date.now()), [setValue]);

  // Carry forward details chosen on other pages (?enquiry=&apps=&industry=&challenges=).
  const applyParams = useCallback(
    (params: URLSearchParams) => {
    const type = params.get("enquiry");
    if (type && enquiryTypes.some((e) => e.value === type)) setValue("enquiryType", type);
    const apps = params.get("apps")?.split(",").filter((a) => productIds.includes(a)) ?? [];
    if (apps.length) setValue("applications", apps);
    const ind = params.get("industry");
    if (ind && industryIds.includes(ind)) setValue("industry", ind);
    const challenges = params.get("challenges")?.split("|").filter(Boolean);
    if (challenges?.length) setValue("message", `Current challenges: ${challenges.join("; ")}.\n\n`);
    },
    [setValue],
  );

  const onSubmit = async (data: EnquiryInput) => {
    setStatus({ state: "idle" });
    try {
      const res = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; reference?: string; error?: string };
      if (!res.ok || !body.ok || !body.reference) throw new Error(body.error || "We couldn't send your enquiry. Please try again.");
      setStatus({ state: "success", reference: body.reference });
      reset();
    } catch (err) {
      // Keep everything the visitor typed; only show the error.
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong. Please try again." });
    }
  };

  // Hidden fields (spam checks) have no visible message, so never fail silently on them.
  const onInvalid = (errs: typeof errors) => {
    if (errs.startedAt || errs.website) setStatus({ state: "error", message: "Please refresh the page and try again." });
  };

  const a11y = (name: keyof EnquiryInput) => ({ "aria-invalid": errors[name] ? true : undefined, "aria-describedby": errors[name] ? `${name}-error` : undefined });

  if (status.state === "success") {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: EASE }} className="flex min-h-[520px] flex-col items-center justify-center rounded-[28px] bg-white p-10 text-center ring-1 ring-line" role="status" aria-live="polite">
        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }} className="grid size-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="size-8" aria-hidden />
        </motion.span>
        <h3 className="mt-6 text-[28px] font-semibold tracking-[-0.03em] text-navy">Thank you — we&apos;ve received your enquiry.</h3>
        <p className="mt-3 max-w-[46ch] text-[15.5px] leading-relaxed text-muted">A member of the Melorite team will review your details and get back to you by email.</p>
        <p className="mt-6 rounded-full bg-paper px-4 py-1.5 font-mono text-[13px] text-navy ring-1 ring-line">Reference {status.reference}</p>
        <button
          type="button"
          onClick={() => {
            setValue("startedAt", Date.now()); // restart the spam-check timer for the fresh form
            setStatus({ state: "idle" });
          }}
          className={buttonClasses("secondary", "md", "mt-8")}
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate className="relative rounded-[28px] bg-white p-6 ring-1 ring-line md:p-10" aria-busy={isSubmitting}>
      <Suspense fallback={null}>
        <ParamsSync onParams={applyParams} />
      </Suspense>
      {/* Enquiry type */}
      <fieldset>
        <legend className="mb-3 text-[14px] font-medium text-navy">Type of enquiry</legend>
        <Controller
          control={control}
          name="enquiryType"
          render={({ field }) => (
            <div role="radiogroup" className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {enquiryTypes.map((t) => {
                const on = field.value === t.value;
                return (
                  <label key={t.value} className={cn("relative flex cursor-pointer items-center justify-center rounded-[12px] px-3 py-3 text-center text-[14px] font-medium ring-1 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand", on ? "text-white ring-navy" : "text-slate-600 ring-line-strong hover:text-navy")}>
                    <input type="radio" className="sr-only" name={field.name} value={t.value} checked={on} onChange={() => field.onChange(t.value)} />
                    {on && <motion.span layoutId="enq-type" className="absolute inset-0 rounded-[12px] bg-navy" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                    <span className="relative">{t.label}</span>
                  </label>
                );
              })}
            </div>
          )}
        />
      </fieldset>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors.fullName?.message}>
          <input id="fullName" autoComplete="name" className={inputCls} {...register("fullName")} {...a11y("fullName")} />
        </Field>
        <Field id="workEmail" label="Work email" error={errors.workEmail?.message}>
          <input id="workEmail" type="email" inputMode="email" autoComplete="email" className={inputCls} {...register("workEmail")} {...a11y("workEmail")} />
        </Field>
        <Field id="phone" label="Phone number" optional error={errors.phone?.message}>
          <input id="phone" type="tel" inputMode="tel" autoComplete="tel" className={inputCls} {...register("phone")} {...a11y("phone")} />
        </Field>
        <Field id="companyName" label="Company name" error={errors.companyName?.message}>
          <input id="companyName" autoComplete="organization" className={inputCls} {...register("companyName")} {...a11y("companyName")} />
        </Field>
        <Field id="industry" label="Industry" error={errors.industry?.message}>
          <div className="relative">
            <select id="industry" className={cn(inputCls, "appearance-none pr-10")} {...register("industry")} {...a11y("industry")}>
              <option value="" disabled>
                Select industry
              </option>
              {industries.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.fullName}
                </option>
              ))}
              <option value="other">Other</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
          </div>
        </Field>
        <Field id="companySize" label="Company size" error={errors.companySize?.message}>
          <div className="relative">
            <select id="companySize" className={cn(inputCls, "appearance-none pr-10")} {...register("companySize")} {...a11y("companySize")}>
              <option value="" disabled>
                Number of employees
              </option>
              {companySizes.map((s) => (
                <option key={s} value={s}>
                  {s} employees
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
          </div>
        </Field>
      </div>

      {/* Applications */}
      <fieldset className="mt-8">
        <legend className="mb-3 flex w-full items-baseline justify-between text-[14px] font-medium text-navy">
          Applications of interest <span className="text-[12.5px] font-normal text-muted">Optional</span>
        </legend>
        <Controller
          control={control}
          name="applications"
          render={({ field }) => (
            <div className="space-y-3">
              {productCategories.map((c) => (
                <div key={c.id} className="flex flex-wrap gap-1.5">
                  {products
                    .filter((p) => p.category === c.id)
                    .map((p) => {
                      const on = field.value.includes(p.id);
                      return (
                        <label
                          key={p.id}
                          className={cn("inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-[13.5px] font-medium ring-1 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand", on ? "" : "text-slate-600 ring-line-strong hover:text-navy")}
                          style={on ? { background: tint(p.accent, 0.1), color: p.accent, boxShadow: `inset 0 0 0 1px ${tint(p.accent, 0.4)}` } : undefined}
                        >
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={on}
                            onChange={() => field.onChange(on ? field.value.filter((x) => x !== p.id) : [...field.value, p.id])}
                          />
                          {on ? <Check className="size-3.5" aria-hidden /> : <Icon name={p.icon} className="size-3.5" />}
                          {p.shortName}
                        </label>
                      );
                    })}
                </div>
              ))}
            </div>
          )}
        />
      </fieldset>

      <Field id="message" label="Message" error={errors.message?.message} className="mt-8">
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your business, your current tools and what you'd like to achieve."
          className={cn(inputCls, "h-auto resize-y py-3 leading-relaxed")}
          {...register("message")}
          {...a11y("message")}
        />
      </Field>

      {/* Honeypot — hidden from people and assistive tech */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>
      <input type="hidden" {...register("startedAt", { valueAsNumber: true })} />

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-slate-600">
          <input id="consent" type="checkbox" className="mt-1 size-4 shrink-0 accent-[var(--color-brand)]" {...register("consent")} {...a11y("consent")} />
          I agree that Melorite may contact me about this enquiry.
        </label>
        {errors.consent && (
          <p id="consent-error" role="alert" className="flex items-center gap-1.5 pt-2 text-[13px] text-red-600">
            <AlertCircle className="size-3.5" aria-hidden /> {errors.consent.message}
          </p>
        )}
      </div>

      <AnimatePresence>
        {status.state === "error" && (
          <motion.div role="alert" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 flex items-start gap-3 rounded-[12px] bg-red-50 p-4 text-[14px] text-red-700 ring-1 ring-red-200">
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
            {status.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12.5px] text-muted">We&apos;ll only use your details to respond to this enquiry.</p>
        <button type="submit" disabled={isSubmitting} className={buttonClasses("primary", "lg", "w-full sm:w-auto")}>
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
            </>
          ) : (
            <>
              Send enquiry <Arrow />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
