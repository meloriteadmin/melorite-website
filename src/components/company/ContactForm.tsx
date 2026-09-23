"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { AlertCircle, Check, CheckCircle2, Loader2 } from "lucide-react";
import { products, productCategories } from "@/data/products";
import { industries } from "@/data/industries";
import { companySizes, enquiryTypes } from "@/data/company";
import { enquirySchema, industryIds, productIds, type EnquiryInput } from "@/lib/enquiry-schema";
import { Icon } from "@/lib/icons";
import { cn, EASE, tint } from "@/lib/utils";
import { buttonClasses, Arrow } from "@/components/shared/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function Field({ id, label, error, optional, children, className }: { id: string; label: string; error?: string; optional?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 flex items-baseline justify-between text-[14px] font-medium text-navy">
        {label}
        {optional && <span className="text-[12.5px] font-normal text-muted">Optional</span>}
      </Label>
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
      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: EASE }} className="flex min-h-[520px] flex-col items-center justify-center rounded-[20px] border border-line bg-white p-10 text-center shadow-soft" role="status" aria-live="polite">
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
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate className="relative rounded-[20px] border border-line bg-white p-6 shadow-soft md:p-9" aria-busy={isSubmitting}>
      {/* Enquiry type */}
      <fieldset>
        <legend className="mb-3 text-[14px] font-medium text-navy">Type of enquiry</legend>
        <Controller
          control={control}
          name="enquiryType"
          render={({ field }) => (
            <div role="radiogroup" aria-label="Type of enquiry" className="grid grid-cols-2 gap-1 rounded-[12px] bg-secondary p-1 ring-1 ring-inset ring-border md:grid-cols-4">
              {enquiryTypes.map((t) => {
                const on = field.value === t.value;
                return (
                  <label
                    key={t.value}
                    className={cn(
                      "relative flex cursor-pointer items-center justify-center rounded-[9px] px-3 py-2.5 text-center text-[14px] font-medium transition-colors has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/35",
                      on ? "text-navy" : "text-slate-500 hover:text-navy",
                    )}
                  >
                    <input type="radio" className="sr-only" name={field.name} value={t.value} aria-label={t.label} checked={on} onChange={() => field.onChange(t.value)} />
                    {on && <motion.span layoutId="enq-type" className="absolute inset-0 rounded-[9px] bg-white shadow-[0_1px_2px_rgb(10_37_64/0.08),0_0_0_1px_rgb(10_37_64/0.04)]" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
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
          <Input id="fullName" autoComplete="name" {...register("fullName")} {...a11y("fullName")} />
        </Field>
        <Field id="workEmail" label="Work email" error={errors.workEmail?.message}>
          <Input id="workEmail" type="email" inputMode="email" autoComplete="email" {...register("workEmail")} {...a11y("workEmail")} />
        </Field>
        <Field id="phone" label="Phone number" optional error={errors.phone?.message}>
          <Input id="phone" type="tel" inputMode="tel" autoComplete="tel" {...register("phone")} {...a11y("phone")} />
        </Field>
        <Field id="companyName" label="Company name" error={errors.companyName?.message}>
          <Input id="companyName" autoComplete="organization" {...register("companyName")} {...a11y("companyName")} />
        </Field>
        <Field id="industry" label="Industry" error={errors.industry?.message}>
          <Controller
            control={control}
            name="industry"
            render={({ field }) => (
              <Select value={field.value || undefined} onValueChange={(v) => v && field.onChange(v)} name={field.name}>
                <SelectTrigger id="industry" className="w-full" onBlur={field.onBlur} {...a11y("industry")}>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent position="popper" className="max-h-[320px]">
                  {industries.map((i) => (
                    <SelectItem key={i.id} value={i.id}>
                      {i.fullName}
                    </SelectItem>
                  ))}
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </Field>
        <Field id="companySize" label="Company size" error={errors.companySize?.message}>
          <Controller
            control={control}
            name="companySize"
            render={({ field }) => (
              <Select value={field.value || undefined} onValueChange={(v) => v && field.onChange(v)} name={field.name}>
                <SelectTrigger id="companySize" className="w-full" onBlur={field.onBlur} {...a11y("companySize")}>
                  <SelectValue placeholder="Number of employees" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {companySizes.map((sz) => (
                    <SelectItem key={sz} value={sz}>
                      {sz} employees
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
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
            <div className="flex flex-wrap gap-1.5">
              {productCategories.flatMap((c) => products.filter((p) => p.category === c.id)).map((p) => {
                const on = field.value.includes(p.id);
                return (
                  <label
                    key={p.id}
                    className={cn(
                      "inline-flex cursor-pointer items-center gap-1.5 rounded-[8px] border px-2.5 py-1.5 text-[13.5px] font-medium transition-colors has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/35",
                      on ? "border-transparent" : "border-line text-slate-600 hover:border-line-strong hover:text-navy",
                    )}
                    style={on ? { background: tint(p.accent, 0.1), color: p.accent, boxShadow: `inset 0 0 0 1px ${tint(p.accent, 0.4)}` } : undefined}
                  >
                    <input type="checkbox" className="sr-only" aria-label={p.name} checked={on} onChange={() => field.onChange(on ? field.value.filter((x) => x !== p.id) : [...field.value, p.id])} />
                    {on ? <Check className="size-3.5" aria-hidden /> : <Icon name={p.icon} className="size-3.5" />}
                    {p.shortName}
                  </label>
                );
              })}
            </div>
          )}
        />
      </fieldset>

      <Field id="message" label="Message" error={errors.message?.message} className="mt-8">
        <Textarea id="message" rows={5} placeholder="Tell us about your business, your current tools and what you'd like to achieve." {...register("message")} {...a11y("message")} />
      </Field>

      {/* Honeypot — hidden from people and assistive tech */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>
      <input type="hidden" {...register("startedAt", { valueAsNumber: true })} />

      <div className="mt-6">
        <Controller
          control={control}
          name="consent"
          render={({ field }) => (
            <div className="flex items-start gap-3">
              <Checkbox id="consent" name="consent" className="mt-0.5" checked={field.value === true} onCheckedChange={(v) => field.onChange(v === true ? true : undefined)} onBlur={field.onBlur} {...a11y("consent")} />
              <Label htmlFor="consent" className="cursor-pointer text-[14px] font-normal leading-relaxed text-slate-600">
                I agree that Melorite may contact me about this enquiry.
              </Label>
            </div>
          )}
        />
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

      <div className="mt-8 flex flex-col-reverse items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
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
      {/* Last in the tree so its effect runs after the Controllers subscribe. */}
      <Suspense fallback={null}>
        <ParamsSync onParams={applyParams} />
      </Suspense>
    </form>
  );
}
