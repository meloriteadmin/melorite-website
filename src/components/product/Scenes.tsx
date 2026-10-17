"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { animate, AnimatePresence, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { Bell, Check, CalendarCheck, CreditCard, Heart, MessageCircle, Package, Phone, Sparkles, TrendingUp, Truck, UserRound } from "lucide-react";

/* ------------------------------------------------------------------
   Every scene is drawn on a fixed 520×380 canvas and scaled to fit its
   container, so cards, heroes and tabs all show the full composition.
   ------------------------------------------------------------------ */
export const SCENE_W = 520;
export const SCENE_H = 380;

export function ScaleBox({ children, className = "", w = SCENE_W, h = SCENE_H }: { children: ReactNode; className?: string; w?: number; h?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [s, setS] = useState(0);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => setS(el.clientWidth / w);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);
  return (
    <div ref={ref} className={`relative w-full ${className}`} style={{ height: h * s, opacity: s ? 1 : 0 }}>
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: w, height: h, transform: `scale(${s})` }}>{children}</div>
    </div>
  );
}

const ink = "text-[#111735]";
const soft = "text-[#111735]/50";

function Tag({ tone = "indigo", children }: { tone?: "indigo" | "green" | "amber" | "rose" | "slate"; children: ReactNode }) {
  const t = { indigo: "bg-[#5f63f2]/12 text-[#4346d6]", green: "bg-emerald-500/14 text-emerald-700", amber: "bg-amber-400/20 text-amber-700", rose: "bg-rose-400/18 text-rose-700", slate: "bg-[#111735]/8 text-[#111735]/60" }[tone];
  return <span className={`inline-flex shrink-0 items-center rounded-full px-2 py-[3px] text-[9.5px] font-semibold leading-none ${t}`}>{children}</span>;
}

function Count({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const v = useMotionValue(0);
  const text = useTransform(v, (n) => `${prefix}${n.toFixed(decimals)}${suffix}`);
  useEffect(() => { if (inView) { const c = animate(v, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1] }); return () => c.stop(); } }, [inView, to, v]);
  return <motion.span ref={ref}>{text}</motion.span>;
}

function Avatar({ name, tone = "#5f63f2" }: { name: string; tone?: string }) {
  return <span className="grid size-6 shrink-0 place-items-center rounded-full text-[9px] font-bold text-white" style={{ background: tone }}>{name.split(" ").map((n) => n[0]).join("")}</span>;
}

/** Cycles through `n` states forever, for lightweight looping demos. */
function useCycle(n: number, ms: number) {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % n), ms); return () => clearInterval(t); }, [n, ms]);
  return i;
}

/* ------------------------------ CRM ------------------------------ */
function CrmA() {
  const lanes: { name: string; tone: "indigo" | "amber" | "green"; cards: ([string, string, string] | null)[] }[] = [
    { name: "New", tone: "amber", cards: [["Kabir Nair", "Instagram", "₹2.4L"], null, ["Diya Patel", "Referral", "₹90K"]] },
    { name: "Proposal", tone: "indigo", cards: [["Meera Joshi", "WhatsApp", "₹6.8L"]] },
    { name: "Won", tone: "green", cards: [["Rahul Verma", "Website", "₹4.1L"], ["Isha Rao", "Referral", "₹1.9L"]] },
  ];
  const cardCls = "pane flex h-[42px] items-center gap-2 px-2";
  return (
    <>
      {lanes.map((lane, li) => (
        <div key={lane.name} className="absolute top-[26px] h-[246px] w-[152px] rounded-[18px] border border-white/70 bg-white/30 p-2 backdrop-blur-md" style={{ left: 22 + li * 164 }}>
          <div className="mb-2 flex h-[14px] items-center justify-between px-1"><span className={`text-[10.5px] font-semibold ${ink}`}>{lane.name}</span><Tag tone={lane.tone}>{lane.cards.length}</Tag></div>
          <div className="space-y-2">
            {lane.cards.map((c, k) => c ? (
              <div key={c[0]} className={cardCls}><Avatar name={c[0]} /><div className="min-w-0 flex-1"><p className={`truncate text-[10px] font-semibold ${ink}`}>{c[0]}</p><p className={`text-[8.5px] ${soft}`}>{c[1]}</p></div><span className={`text-[9.5px] font-bold ${ink}`}>{c[2]}</span></div>
            ) : <div key={k} className="h-[42px] rounded-2xl border border-dashed border-[#4b4fe0]/30" />)}
            <div className="flex h-[30px] items-center justify-center rounded-xl text-[9.5px] font-semibold text-[#111735]/35">+ Add lead</div>
          </div>
        </div>
      ))}
      <motion.div className="pane absolute z-10 flex h-[42px] w-[136px] items-center gap-2 px-2" style={{ left: 30, top: 108 }}
        animate={{ x: [0, 0, 164, 164], y: [0, -8, -8, 0], rotate: [0, -3, 3, 0], opacity: [1, 1, 1, 1], scale: [1, 1.05, 1.05, 1] }}
        transition={{ duration: 4.2, repeat: Infinity, times: [0, .25, .7, 1], ease: "easeInOut", repeatDelay: .8 }}>
        <Avatar name="Aarav Sharma" tone="#e0662f" /><div className="min-w-0 flex-1"><p className={`truncate text-[10px] font-semibold ${ink}`}>Aarav Sharma</p><p className={`text-[8.5px] ${soft}`}>Website</p></div><span className={`text-[9.5px] font-bold ${ink}`}>₹3.2L</span>
      </motion.div>
      <div className="pane absolute bottom-[26px] left-[22px] right-[22px] flex items-center gap-3 px-3.5 py-2.5">
        <span className="relative grid size-9 place-items-center rounded-xl bg-[#111735] text-white"><Bell className="size-4" /><i className="absolute -right-0.5 -top-0.5 size-2.5 animate-pulse rounded-full bg-rose-500 ring-2 ring-white" /></span>
        <div className="flex-1"><p className={`text-[11px] font-semibold ${ink}`}>Follow-up due · Aarav Sharma</p><p className={`text-[9.5px] ${soft}`}>Quote sent 2 days ago — call at 4:30 pm</p></div>
        <span className="rounded-full bg-[#111735] px-3 py-1.5 text-[10px] font-semibold text-white">Call now</span>
      </div>
    </>
  );
}

function CrmB() {
  const pts = [12, 34, 26, 52, 44, 70, 62, 92];
  const d = pts.map((p, i) => `${i ? "L" : "M"}${i * 46 + 6} ${150 - p * 1.3}`).join(" ");
  return (
    <>
      <div className="pane absolute left-[22px] top-[26px] h-[232px] w-[330px] p-4">
        <div className="flex items-start justify-between"><div><p className={`text-[9.5px] font-semibold uppercase tracking-[.12em] ${soft}`}>Pipeline value</p><p className={`mt-1 text-[28px] font-semibold leading-none tracking-[-.04em] ${ink}`}><Count to={48.2} prefix="₹" suffix="L" decimals={1} /></p></div><Tag tone="green"><TrendingUp className="mr-1 size-2.5" />8% this month</Tag></div>
        <svg viewBox="0 0 330 160" className="mt-2 h-[140px] w-full overflow-visible">
          <defs><linearGradient id="crm-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#5f63f2" stopOpacity=".32" /><stop offset="1" stopColor="#5f63f2" stopOpacity="0" /></linearGradient></defs>
          <motion.path d={`${d} L 328 160 L 6 160 Z`} fill="url(#crm-fill)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: .5 }} />
          <motion.path d={d} fill="none" stroke="#4b4fe0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: "easeOut" }} />
          <circle cx="328" cy={150 - 92 * 1.3} r="4.5" fill="#fff" stroke="#4b4fe0" strokeWidth="2.5" />
        </svg>
      </div>
      <div className="pane absolute right-[22px] top-[26px] flex h-[232px] w-[142px] flex-col items-center justify-center p-3">
        <div className="relative size-[96px]">
          <svg viewBox="0 0 36 36" className="size-full -rotate-90"><circle cx="18" cy="18" r="15.5" fill="none" stroke="#5f63f2" strokeOpacity=".14" strokeWidth="3.4" /><motion.circle cx="18" cy="18" r="15.5" fill="none" stroke="#4b4fe0" strokeWidth="3.4" strokeLinecap="round" strokeDasharray="97.4" initial={{ strokeDashoffset: 97.4 }} whileInView={{ strokeDashoffset: 97.4 * (1 - .38) }} viewport={{ once: true }} transition={{ duration: 1.6, ease: "easeOut" }} /></svg>
          <div className="absolute inset-0 grid place-items-center text-center"><p className={`text-[20px] font-semibold leading-none ${ink}`}>38%</p></div>
        </div>
        <p className={`mt-3 text-[10.5px] font-semibold ${ink}`}>Lead to customer</p><p className={`text-[9px] ${soft}`}>up 3 points</p>
      </div>
      <div className="absolute bottom-[26px] left-[22px] right-[22px] grid grid-cols-3 gap-3">
        {[["Open leads", "214"], ["Follow-ups today", "18"], ["Won this week", "9"]].map(([k, v]) => <div key={k} className="pane px-3 py-2.5"><p className={`text-[9px] ${soft}`}>{k}</p><p className={`text-[18px] font-semibold leading-tight ${ink}`}>{v}</p></div>)}
      </div>
    </>
  );
}

/* --------------------------- Real estate --------------------------- */
function EstateA() {
  const rows = 5, cols = 6;
  const status = (r: number, c: number) => ((r * 7 + c * 3) % 9 === 0 ? "sold" : (r * 5 + c) % 7 === 0 ? "hold" : "open");
  return (
    <>
      <div className="pane absolute left-[22px] top-[26px] h-[328px] w-[300px] p-3.5">
        <div className="mb-3 flex items-center justify-between"><div><p className={`text-[12px] font-semibold ${ink}`}>Skyline Residences</p><p className={`text-[9px] ${soft}`}>Tower B · floors 6 – 10</p></div><div className="flex gap-1"><Tag tone="green">Open</Tag><Tag tone="amber">Hold</Tag><Tag tone="slate">Sold</Tag></div></div>
        <div className="grid gap-[5px]" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {Array.from({ length: rows * cols }, (_, i) => {
            const r = Math.floor(i / cols), c = i % cols, st = status(r, c), sel = r === 2 && c === 3;
            return <motion.span key={i} initial={{ opacity: 0, scale: .8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .018 }}
              className={`relative grid h-[38px] place-items-center rounded-lg text-[8.5px] font-semibold ${sel ? "bg-[#4b4fe0] text-white shadow-[0_8px_18px_-6px_rgba(75,79,224,.8)]" : st === "sold" ? "bg-[#111735]/8 text-[#111735]/35" : st === "hold" ? "bg-amber-300/40 text-amber-800" : "bg-emerald-400/30 text-emerald-800"}`}>
              B-{10 - r}0{c + 1}{st === "open" && !sel && (r + c) % 4 === 0 && <i className="absolute right-1 top-1 size-1.5 animate-ping rounded-full bg-emerald-500" />}
            </motion.span>;
          })}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-xl bg-white/60 px-3 py-2 text-[9.5px]"><span className={soft}>64 units available</span><span className={`font-semibold ${ink}`}>3 newly released</span></div>
      </div>
      <motion.div className="pane absolute right-[22px] top-[48px] w-[170px] p-3.5" animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <div className="flex items-center justify-between"><Tag tone="indigo">Selected</Tag><span className={`text-[9px] ${soft}`}>Floor 8</span></div>
        <p className={`mt-2 text-[20px] font-semibold leading-none tracking-[-.03em] ${ink}`}>B-804</p>
        <p className={`mt-1 text-[10px] ${soft}`}>3 BHK · 1,420 sq ft</p>
        <p className={`mt-3 text-[15px] font-semibold ${ink}`}>₹1.28 Cr</p>
        <div className="mt-3 rounded-lg bg-[#111735] py-2 text-center text-[10px] font-semibold text-white">Reserve unit</div>
      </motion.div>
      <motion.div className="pane absolute bottom-[26px] right-[34px] flex w-[158px] items-center gap-2.5 p-2.5" animate={{ y: [0, 6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
        <span className="grid size-8 place-items-center rounded-xl bg-emerald-500/15 text-emerald-700"><CalendarCheck className="size-4" /></span>
        <div><p className={`text-[10px] font-semibold ${ink}`}>Site visit · 4 pm</p><p className={`text-[9px] ${soft}`}>Confirmed · 6 today</p></div>
      </motion.div>
    </>
  );
}

function EstateB() {
  const steps: [string, string, boolean][] = [["Booking amount", "₹10.0L", true], ["Foundation", "₹18.5L", true], ["4th slab", "₹21.0L", false], ["Possession", "₹38.0L", false]];
  return (
    <>
      <div className="pane absolute left-[22px] top-[26px] flex h-[328px] w-[188px] flex-col items-center justify-center p-4">
        <div className="relative size-[132px]">
          <svg viewBox="0 0 36 36" className="size-full -rotate-90"><circle cx="18" cy="18" r="15.5" fill="none" stroke="#5f63f2" strokeOpacity=".14" strokeWidth="3" /><motion.circle cx="18" cy="18" r="15.5" fill="none" stroke="#4b4fe0" strokeWidth="3" strokeLinecap="round" strokeDasharray="97.4" initial={{ strokeDashoffset: 97.4 }} whileInView={{ strokeDashoffset: 97.4 * .32 }} viewport={{ once: true }} transition={{ duration: 1.8, ease: "easeOut" }} /></svg>
          <div className="absolute inset-0 grid place-items-center text-center"><div><p className={`text-[26px] font-semibold leading-none tracking-[-.04em] ${ink}`}><Count to={68} suffix="%" /></p><p className={`mt-1 text-[9px] ${soft}`}>collected</p></div></div>
        </div>
        <p className={`mt-4 text-[11px] font-semibold ${ink}`}>₹42.5L due</p><p className={`text-[9px] ${soft}`}>across 7 buyers</p>
      </div>
      <div className="pane absolute right-[22px] top-[26px] h-[328px] w-[286px] p-4">
        <p className={`text-[12px] font-semibold ${ink}`}>Payment schedule · B-804</p><p className={`text-[9px] ${soft}`}>Mr. & Mrs. Kapoor</p>
        <div className="relative mt-4 space-y-3.5 pl-5">
          <span className="absolute bottom-3 left-[7px] top-2 w-px bg-[#111735]/12" />
          {steps.map(([n, a, done], i) => (
            <motion.div key={n} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .15 * i }} className="relative flex items-center justify-between rounded-xl bg-white/60 px-3 py-2.5">
              <span className={`absolute -left-[19px] grid size-3.5 place-items-center rounded-full ring-4 ring-white/70 ${done ? "bg-emerald-500" : i === 2 ? "bg-[#4b4fe0]" : "bg-[#111735]/20"}`}>{done && <Check className="size-2 text-white" strokeWidth={4} />}</span>
              <div><p className={`text-[10.5px] font-semibold ${ink}`}>{n}</p><p className={`text-[8.5px] ${soft}`}>{done ? "Received" : i === 2 ? "Due 24 Oct" : "Upcoming"}</p></div>
              <span className={`text-[11px] font-semibold ${ink}`}>{a}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-xl bg-[#111735] px-3 py-2.5 text-white"><span className="text-[10px] font-semibold">Send payment reminder</span><CreditCard className="size-3.5 text-[#a5a8ff]" /></div>
      </div>
    </>
  );
}

/* ------------------------------ Clinic ------------------------------ */
function Ecg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 40" className={className} preserveAspectRatio="none">
      <path d="M0 20 H40 L48 20 L54 6 L62 34 L68 20 H110 L118 20 L124 8 L132 32 L138 20 H180 L188 20 L194 6 L202 34 L208 20 H240" fill="none" stroke="#4b4fe0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="120 120" style={{ animation: "ecg-scroll 2.4s linear infinite" }} />
      <path d="M0 20 H40 L48 20 L54 6 L62 34 L68 20 H110 L118 20 L124 8 L132 32 L138 20 H180 L188 20 L194 6 L202 34 L208 20 H240" fill="none" stroke="#4b4fe0" strokeOpacity=".16" strokeWidth="2" />
    </svg>
  );
}

function ClinicA() {
  const slots: [string, string, string, boolean][] = [["10:00", "Ananya Rao", "Check-up", true], ["10:30", "Vikram Das", "Follow-up", true], ["11:15", "Sana Khan", "Dental", false], ["12:00", "Ishaan Gupta", "Skin consult", false]];
  return (
    <>
      <div className="absolute left-[168px] top-[14px] h-[352px] w-[190px] rounded-[34px] border-[6px] border-[#111735] bg-white/85 p-3 shadow-[0_30px_60px_-24px_rgba(17,23,53,.6)] backdrop-blur-md">
        <div className="mx-auto h-[14px] w-[56px] rounded-full bg-[#111735]" />
        <p className={`mt-3 text-[20px] font-semibold leading-none tracking-[-.04em] ${ink}`}>Today</p><p className={`text-[8.5px] ${soft}`}>Dr. Mehta · 12 appointments</p>
        <div className="relative mt-3 space-y-1.5">
          {slots.map(([t, n, r, done], i) => (
            <div key={n} className={`flex items-center gap-2 rounded-xl px-2 py-2 ${i === 2 ? "bg-[#4b4fe0]/12 ring-1 ring-[#4b4fe0]/30" : "bg-[#111735]/[.04]"}`}>
              <span className={`w-7 text-[8.5px] font-semibold ${soft}`}>{t}</span><div className="min-w-0 flex-1"><p className={`truncate text-[9.5px] font-semibold ${ink}`}>{n}</p><p className={`text-[8px] ${soft}`}>{r}</p></div>
              {done ? <Check className="size-3 text-emerald-600" strokeWidth={3} /> : i === 2 ? <span className="size-1.5 animate-pulse rounded-full bg-[#4b4fe0]" /> : null}
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-[#111735] p-2.5 text-white"><div className="flex items-center justify-between text-[8.5px] font-semibold"><span>Waiting room</span><span className="text-[#a5a8ff]">4 · ~8 min</span></div><Ecg className="mt-1.5 h-[24px] w-full invert-[.9] hue-rotate-[200deg]" /></div>
      </div>
      <motion.div className="pane absolute left-[22px] top-[60px] w-[132px] p-3" animate={{ y: [0, -7, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <span className="grid size-8 place-items-center rounded-xl bg-rose-400/18 text-rose-600"><Heart className="size-4" /></span>
        <p className={`mt-2 text-[18px] font-semibold leading-none ${ink}`}>72 <span className={`text-[9px] font-medium ${soft}`}>bpm</span></p><p className={`mt-1 text-[9px] ${soft}`}>Ananya · live vitals</p>
      </motion.div>
      <motion.div className="pane absolute right-[22px] top-[110px] w-[142px] p-3" animate={{ y: [0, 7, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
        <div className="flex items-center gap-1.5"><Sparkles className="size-3.5 text-[#4b4fe0]" /><p className={`text-[10px] font-semibold ${ink}`}>Prescription ready</p></div>
        <p className={`mt-1.5 text-[9px] leading-snug ${soft}`}>Send to Ananya Rao on WhatsApp?</p><div className="mt-2 rounded-lg bg-[#111735] py-1.5 text-center text-[9.5px] font-semibold text-white">Send</div>
      </motion.div>
      <div className="pane absolute bottom-[34px] left-[22px] w-[132px] px-3 py-2.5"><p className={`text-[9px] ${soft}`}>Billing today</p><p className={`text-[17px] font-semibold ${ink}`}>₹38,400</p></div>
    </>
  );
}

function ClinicB() {
  return (
    <>
      <div className="pane absolute left-[22px] top-[26px] w-[476px] p-4">
        <div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-[#8f94ff] to-[#4b4fe0] text-[14px] font-bold text-white">AR</span>
          <div className="flex-1"><p className={`text-[13px] font-semibold ${ink}`}>Ananya Rao · 34 F</p><p className={`text-[9.5px] ${soft}`}>Last visit 12 Sep · Hypertension review</p></div><Tag tone="green">In consultation</Tag></div>
        <div className="mt-3 rounded-xl bg-white/60 px-3 pt-2"><div className="flex items-center justify-between"><p className={`text-[9.5px] font-semibold uppercase tracking-[.12em] ${soft}`}>Live ECG</p><p className={`text-[11px] font-semibold ${ink}`}>72 bpm</p></div><Ecg className="h-[48px] w-full" /></div>
      </div>
      <div className="absolute left-[22px] top-[186px] grid w-[476px] grid-cols-3 gap-3">
        {[["Blood pressure", "118/76", "Normal", "green"], ["Weight", "62.4 kg", "−0.8 kg", "indigo"], ["Glucose", "98 mg/dL", "Fasting", "amber"]].map(([k, v, s, t]) => (
          <div key={k} className="pane px-3 py-2.5"><p className={`text-[9px] ${soft}`}>{k}</p><p className={`mt-0.5 text-[16px] font-semibold ${ink}`}>{v}</p><Tag tone={t as "green" | "indigo" | "amber"}>{s}</Tag></div>
        ))}
      </div>
      <div className="pane absolute bottom-[26px] left-[22px] flex w-[476px] items-center gap-3 px-3.5 py-3">
        <span className="grid size-9 place-items-center rounded-xl bg-[#111735] text-white"><Sparkles className="size-4" /></span>
        <div className="flex-1"><p className={`text-[11px] font-semibold ${ink}`}>Telmisartan 40 mg · once daily · 30 days</p><p className={`text-[9px] ${soft}`}>Auto-filled from last prescription</p></div><Tag tone="indigo">Ready to send</Tag>
      </div>
    </>
  );
}

/* ------------------------------ Agency ------------------------------ */
function AgencyA() {
  const stages = ["Brief", "Design", "Review", "Live"];
  const i = useCycle(3, 2600);
  const cards = [["#ffb3c6", "#ff8ab0"], ["#b8c0ff", "#8f94ff"], ["#ffd2a8", "#ffb27a"]];
  return (
    <>
      <div className="pane absolute left-[22px] right-[22px] top-[26px] px-4 py-3.5">
        <div className="flex items-center justify-between"><p className={`text-[11px] font-semibold ${ink}`}>Bloom Cosmetics · Summer launch</p><Tag tone="indigo">Client portal</Tag></div>
        <div className="relative mt-3 flex justify-between">
          <span className="absolute left-3 right-3 top-[9px] h-[3px] rounded-full bg-[#111735]/10" />
          <motion.span className="absolute left-3 top-[9px] h-[3px] rounded-full bg-[#4b4fe0]" animate={{ width: `${(i + 1) * 31}%` }} transition={{ duration: .8, ease: [0.16, 1, 0.3, 1] }} />
          {stages.map((s, k) => <div key={s} className="relative flex flex-col items-center gap-1"><span className={`grid size-[21px] place-items-center rounded-full text-[8px] font-bold transition-colors duration-500 ${k <= i + 0 ? "bg-[#4b4fe0] text-white" : "bg-white text-[#111735]/40 ring-1 ring-[#111735]/10"}`}>{k <= i ? <Check className="size-3" strokeWidth={3.5} /> : k + 1}</span><span className={`text-[8.5px] font-semibold ${k <= i ? ink : soft}`}>{s}</span></div>)}
        </div>
      </div>
      <div className="absolute left-[40px] top-[132px] h-[190px] w-[240px]">
        {cards.map(([a, b], k) => (
          <motion.div key={k} className="absolute inset-0 overflow-hidden rounded-2xl border border-white/90 shadow-[0_22px_40px_-20px_rgba(17,23,53,.5)]" style={{ background: `linear-gradient(135deg, ${a}, ${b})`, zIndex: 3 - k }}
            animate={{ rotate: [-6 + k * 7, -3 + k * 7, -6 + k * 7], x: k * 14, y: k * -6 }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: k * .4 }}>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/30 to-transparent p-3 pt-10"><p className="text-[11px] font-semibold text-white">{["Summer launch reel · v2", "Carousel · 5 slides", "Story pack"][k]}</p></div>
            {k === 0 && <span className="absolute right-2.5 top-2.5 grid size-7 place-items-center rounded-full bg-white/80 text-[#4b4fe0]"><Sparkles className="size-3.5" /></span>}
          </motion.div>
        ))}
      </div>
      <div className="pane absolute right-[22px] top-[132px] w-[196px] p-3">
        <div className="flex items-center gap-2"><Avatar name="Neha Shah" tone="#e0662f" /><div><p className={`text-[10px] font-semibold ${ink}`}>Neha · Bloom</p><p className={`text-[8px] ${soft}`}>just now</p></div></div>
        <p className={`mt-2 rounded-xl rounded-tl-sm bg-white/70 p-2 text-[9.5px] leading-snug ${ink}`}>Love the colours! Can the CTA be a bit bolder?</p>
        <div className="mt-2.5 flex gap-1.5"><span className="flex-1 rounded-full border border-[#111735]/12 py-1.5 text-center text-[9.5px] font-semibold">Revise</span><span className="flex-1 rounded-full bg-[#111735] py-1.5 text-center text-[9.5px] font-semibold text-white">Approve</span></div>
      </div>
      <div className="pane absolute bottom-[26px] right-[22px] flex w-[196px] items-center justify-between px-3 py-2.5"><div><p className={`text-[9px] ${soft}`}>Invoice #118</p><p className={`text-[13px] font-semibold ${ink}`}>₹1.2L</p></div><Tag tone="green"><Check className="mr-0.5 size-2.5" strokeWidth={3.5} />Paid</Tag></div>
    </>
  );
}

function AgencyB() {
  const marks: Record<number, [string, "indigo" | "rose" | "green"]> = { 3: ["Reel", "rose"], 5: ["Post", "indigo"], 8: ["Carousel", "indigo"], 11: ["Reel", "rose"], 14: ["Launch", "green"], 17: ["Post", "indigo"], 20: ["Story", "rose"] };
  return (
    <>
      <div className="pane absolute left-[22px] top-[26px] h-[328px] w-[326px] p-3.5">
        <div className="mb-2.5 flex items-center justify-between"><p className={`text-[12px] font-semibold ${ink}`}>October · Content calendar</p><Tag tone="slate">21 scheduled</Tag></div>
        <div className="grid grid-cols-7 gap-1 text-center text-[8px] font-semibold text-[#111735]/40">{["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <span key={i}>{d}</span>)}</div>
        <div className="mt-1 grid grid-cols-7 gap-1">
          {Array.from({ length: 28 }, (_, i) => { const m = marks[i]; return (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * .012 }} className={`flex h-[44px] flex-col rounded-lg p-1 ${m ? "bg-white/80 ring-1 ring-white" : "bg-white/35"}`}>
              <span className={`text-[8px] ${soft}`}>{i + 1}</span>{m && <span className={`mt-auto rounded px-1 py-0.5 text-[7px] font-bold ${m[1] === "rose" ? "bg-rose-400/20 text-rose-700" : m[1] === "green" ? "bg-emerald-400/25 text-emerald-700" : "bg-[#5f63f2]/15 text-[#4346d6]"}`}>{m[0]}</span>}
            </motion.div>); })}
        </div>
      </div>
      <div className="absolute right-[22px] top-[26px] w-[144px] space-y-3">
        <div className="pane p-3"><p className={`text-[9px] ${soft}`}>Awaiting approval</p><p className={`text-[26px] font-semibold leading-none tracking-[-.04em] ${ink}`}><Count to={7} /></p><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#111735]/10"><motion.div className="h-full rounded-full bg-[#4b4fe0]" initial={{ width: 0 }} whileInView={{ width: "58%" }} viewport={{ once: true }} transition={{ duration: 1.2 }} /></div></div>
        <div className="pane p-3"><p className={`text-[9px] ${soft}`}>Invoices paid</p><p className={`text-[20px] font-semibold ${ink}`}>₹3.4L</p><Tag tone="green">All settled</Tag></div>
        <div className="pane p-3"><p className={`text-[9px] ${soft}`}>Team capacity</p><div className="mt-1.5 flex -space-x-1.5">{["Priya Nair", "Kabir S", "Mira P", "Dev R"].map((n, k) => <span key={n} className="ring-2 ring-white rounded-full"><Avatar name={n} tone={["#5f63f2", "#e0662f", "#2f8d66", "#c14fa0"][k]} /></span>)}</div></div>
      </div>
    </>
  );
}

/* ------------------------------ Commerce ------------------------------ */
function CommerceA() {
  const feed: [string, string, string][] = [["Linen shirt ×2", "₹2,998", "UPI"], ["Cotton kurta", "₹1,499", "COD"], ["Denim jacket", "₹3,299", "Card"], ["Silk scarf", "₹899", "UPI"], ["Canvas tote", "₹749", "UPI"], ["Wool stole", "₹2,150", "COD"]];
  const t = useCycle(feed.length, 1800);
  const shown = [0, 1, 2].map((k) => ({ k: t + 3 - k, o: feed[(t + 3 - k) % feed.length] }));
  const pts = [20, 34, 28, 46, 40, 62, 55, 74, 70, 92];
  const d = pts.map((p, i) => `${i ? "L" : "M"}${i * 22 + 4} ${90 - p * .8}`).join(" ");
  return (
    <>
      <div className="pane absolute left-[22px] top-[22px] h-[150px] w-[270px] p-4">
        <div className="flex items-start justify-between"><div><p className={`text-[9px] font-semibold uppercase tracking-[.12em] ${soft}`}>Today’s sales</p><p className={`text-[26px] font-semibold leading-none tracking-[-.04em] ${ink}`}><Count to={1.86} prefix="₹" suffix="L" decimals={2} /></p></div><Tag tone="green"><TrendingUp className="mr-1 size-2.5" />14%</Tag></div>
        <svg viewBox="0 0 210 96" className="mt-1 h-[58px] w-full overflow-visible"><motion.path d={d} fill="none" stroke="#c14fa0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6 }} /></svg>
      </div>
      <div className="pane absolute right-[22px] top-[22px] h-[150px] w-[190px] p-3.5">
        <p className={`text-[9px] ${soft}`}>Repeat buyers</p><p className={`text-[26px] font-semibold leading-none tracking-[-.04em] ${ink}`}>42%</p>
        <div className="mt-2.5 flex h-[56px] items-end gap-1.5">{[40, 62, 48, 80, 58, 90, 70].map((h, i) => <motion.span key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-[#c14fa0] to-[#ff9d8a]" initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ delay: i * .07, duration: .7 }} />)}</div>
      </div>
      <div className="pane absolute bottom-[22px] left-[22px] right-[22px] h-[172px] overflow-hidden p-3">
        <div className="mb-2 flex items-center justify-between"><p className={`text-[10.5px] font-semibold ${ink}`}>Live orders</p><span className="flex items-center gap-1.5 text-[9px] font-semibold text-emerald-700"><i className="size-1.5 animate-pulse rounded-full bg-emerald-500" />86 today</span></div>
        <AnimatePresence initial={false} mode="popLayout">
          {shown.map(({ k, o }, idx) => (
            <motion.div layout key={k} initial={{ opacity: 0, y: -24, scale: .96 }} animate={{ opacity: 1 - idx * .12, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: .5, ease: [0.16, 1, 0.3, 1] }} className="mb-1.5 flex items-center gap-2.5 rounded-xl bg-white/65 px-2.5 py-2">
              <span className="grid size-6 place-items-center rounded-lg bg-[#c14fa0]/14 text-[#a53a87]"><Package className="size-3.5" /></span>
              <span className={`flex-1 truncate text-[10px] font-semibold ${ink}`}>#{1042 + k} · {o[0]}</span><span className={`text-[10px] font-bold ${ink}`}>{o[1]}</span><Tag tone={o[2] === "COD" ? "amber" : "slate"}>{o[2]}</Tag>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

function CommerceB() {
  const stages: [string, typeof Package][] = [["Placed", Package], ["Packed", Check], ["Shipped", Truck], ["Delivered", Heart]];
  const i = useCycle(4, 1700);
  return (
    <>
      <div className="pane absolute left-[22px] right-[22px] top-[26px] p-4">
        <div className="flex items-center justify-between"><p className={`text-[12px] font-semibold ${ink}`}>Order #1043 · Sana Jain</p><Tag tone="amber">COD · confirm</Tag></div>
        <div className="relative mt-5 flex justify-between px-3">
          <span className="absolute left-[42px] right-[42px] top-[17px] h-[3px] rounded-full bg-[#111735]/10" />
          <motion.span className="absolute left-[42px] top-[17px] h-[3px] rounded-full bg-gradient-to-r from-[#c14fa0] to-[#ff9d8a]" animate={{ width: `calc((100% - 84px) * ${i / 3})` }} transition={{ duration: .7 }} />
          {stages.map(([s, Icon], k) => <div key={s} className="relative flex w-[60px] flex-col items-center gap-1.5"><span className={`grid size-[36px] place-items-center rounded-full transition-all duration-500 ${k <= i ? "bg-gradient-to-br from-[#c14fa0] to-[#ff9d8a] text-white shadow-[0_8px_18px_-6px_rgba(193,79,160,.7)]" : "bg-white text-[#111735]/35 ring-1 ring-[#111735]/10"}`}><Icon className="size-4" /></span><span className={`text-[9px] font-semibold ${k <= i ? ink : soft}`}>{s}</span></div>)}
        </div>
      </div>
      <div className="pane absolute bottom-[26px] left-[22px] h-[170px] w-[290px] p-4">
        <div className="flex items-center justify-between"><p className={`text-[11px] font-semibold ${ink}`}>Stock levels</p><Tag tone="rose">2 low</Tag></div>
        <div className="mt-3 space-y-2.5">{[["Linen shirt", 72, "#c14fa0"], ["Cotton kurta", 38, "#ff9d8a"], ["Denim jacket", 12, "#e0662f"], ["Silk scarf", 54, "#c14fa0"]].map(([n, v, c]) => <div key={n as string}><div className="mb-1 flex justify-between text-[9px]"><span className={`font-semibold ${ink}`}>{n}</span><span className={soft}>{v} left</span></div><div className="h-1.5 overflow-hidden rounded-full bg-[#111735]/10"><motion.div className="h-full rounded-full" style={{ background: c as string }} initial={{ width: 0 }} whileInView={{ width: `${v}%` }} viewport={{ once: true }} transition={{ duration: 1 }} /></div></div>)}</div>
      </div>
      <div className="pane absolute bottom-[26px] right-[22px] flex h-[170px] w-[170px] flex-col justify-between p-4"><span className="grid size-9 place-items-center rounded-xl bg-[#111735] text-white"><MessageCircle className="size-4" /></span><div><p className={`text-[22px] font-semibold leading-none tracking-[-.04em] ${ink}`}>12</p><p className={`mt-1 text-[9.5px] leading-snug ${soft}`}>COD orders auto-confirmed on WhatsApp</p></div></div>
    </>
  );
}

/* ------------------------------ AI Calling ------------------------------ */
function Wave({ n = 28, h = 36, className = "" }: { n?: number; h?: number; className?: string }) {
  return <div className={`flex items-center justify-between gap-[3px] ${className}`} style={{ height: h }}>{Array.from({ length: n }, (_, i) => <i key={i} className="w-[3px] flex-1 origin-center rounded-full bg-gradient-to-t from-[#4b4fe0] to-[#c14fa0]" style={{ height: "100%", animation: `bar-bounce ${0.9 + ((i * 37) % 7) / 10}s ease-in-out ${-((i * 53) % 10) / 10}s infinite` }} />)}</div>;
}

function CallingA() {
  const i = useCycle(3, 2400);
  return (
    <>
      <div className="pane absolute left-[22px] top-[26px] w-[476px] p-4">
        <div className="flex items-center gap-3">
          <span className="relative grid size-10 place-items-center rounded-full bg-[#111735] text-white"><Phone className="size-4" /><i className="absolute inset-0 rounded-full border border-[#4b4fe0]" style={{ animation: "ring-out 2s ease-out infinite" }} /><i className="absolute inset-0 rounded-full border border-[#c14fa0]" style={{ animation: "ring-out 2s ease-out .8s infinite" }} /></span>
          <div className="flex-1"><p className={`text-[12px] font-semibold ${ink}`}>Incoming call · +91 98••• ••421</p><p className={`text-[9.5px] ${soft}`}>Sunrise Family Clinic · 02:14</p></div><Tag tone="green">Answered by AI</Tag>
        </div>
        <Wave className="mt-3" n={46} h={38} />
      </div>
      <div className="absolute left-[22px] top-[158px] w-[300px] space-y-2.5">
        <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`pane max-w-[250px] rounded-tl-sm p-2.5 text-[10.5px] leading-snug ${ink}`}><span className="mb-0.5 block text-[8px] font-bold uppercase tracking-[.12em] text-[#111735]/40">Caller</span>Hi, do you have any slots tomorrow morning?</motion.p>
        <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .5 }} className="ml-10 max-w-[250px] rounded-2xl rounded-tr-sm border border-white/70 bg-gradient-to-br from-[#e6e7ff] to-[#f6dcf3] p-2.5 text-[10.5px] leading-snug text-[#2c2c60]"><span className="mb-0.5 block text-[8px] font-bold uppercase tracking-[.12em] text-[#4b4fe0]">Melorite AI</span>Yes — 10:30 am is open with Dr. Mehta. Shall I book it?</motion.p>
      </div>
      <div className="pane absolute right-[22px] top-[158px] w-[154px] p-3"><p className={`text-[9px] ${soft}`}>Today</p><p className={`text-[22px] font-semibold leading-none tracking-[-.04em] ${ink}`}><Count to={126} /></p><p className={`text-[9px] ${soft}`}>calls answered</p><Tag tone="indigo">24 after hours</Tag></div>
      <div className="pane absolute bottom-[26px] left-[22px] right-[22px] flex items-center gap-3 px-3.5 py-3">
        <span className="grid size-9 place-items-center rounded-xl bg-emerald-500/15 text-emerald-700"><CalendarCheck className="size-4" /></span>
        <div className="flex-1"><p className={`text-[11px] font-semibold ${ink}`}>{["Booked · Tomorrow 10:30 am", "Added to Dr. Mehta’s calendar", "Confirmation sent on WhatsApp"][i]}</p><p className={`text-[9px] ${soft}`}>Summary and transcript saved to the patient record</p></div><Tag tone="green">Done</Tag>
      </div>
    </>
  );
}

function CallingB() {
  const calls: [string, string, "green" | "indigo" | "amber"][] = [["Reminder · Ananya Rao", "Confirmed", "green"], ["Follow-up · Vikram Das", "Rescheduled", "indigo"], ["Lead · Sana Khan", "Transferred", "amber"], ["Order · Ishaan Gupta", "Confirmed", "green"]];
  const i = useCycle(calls.length, 1600);
  return (
    <>
      <div className="pane absolute left-[22px] top-[26px] flex h-[328px] w-[206px] flex-col items-center justify-center p-4">
        <div className="relative grid size-[150px] place-items-center">
          {[0, 1, 2].map((k) => <i key={k} className="absolute inset-0 rounded-full border border-[#4b4fe0]/50" style={{ animation: `ring-out 3.2s ease-out ${k * 1.05}s infinite` }} />)}
          <span className="grid size-[84px] place-items-center rounded-full bg-gradient-to-br from-[#4b4fe0] via-[#8f6bf0] to-[#e259b5] text-white shadow-[0_18px_40px_-12px_rgba(95,99,242,.7)]"><Phone className="size-7" /></span>
        </div>
        <p className={`mt-4 text-[12px] font-semibold ${ink}`}>Campaign · Reminders</p><p className={`text-[9.5px] ${soft}`}>212 of 300 contacts called</p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#111735]/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-[#4b4fe0] to-[#e259b5]" initial={{ width: 0 }} whileInView={{ width: "70%" }} viewport={{ once: true }} transition={{ duration: 1.4 }} /></div>
      </div>
      <div className="pane absolute right-[22px] top-[26px] h-[328px] w-[256px] p-3.5">
        <div className="flex items-center justify-between"><p className={`text-[11px] font-semibold ${ink}`}>Outcomes</p><Tag tone="slate">Live</Tag></div>
        <div className="mt-3 flex h-3 overflow-hidden rounded-full"><span className="bg-emerald-500" style={{ width: "54%" }} /><span className="bg-[#4b4fe0]" style={{ width: "28%" }} /><span className="bg-amber-400" style={{ width: "18%" }} /></div>
        <div className="mt-2 flex justify-between text-[8.5px] font-semibold"><span className="text-emerald-700">Confirmed 54%</span><span className="text-[#4346d6]">Booked 28%</span><span className="text-amber-700">Passed 18%</span></div>
        <div className="mt-4 space-y-2">
          {calls.map(([n, s, t], k) => <motion.div key={n} animate={{ scale: k === i ? 1.02 : 1, opacity: k === i ? 1 : .7 }} className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2 ${k === i ? "bg-white shadow-[0_10px_24px_-14px_rgba(17,23,53,.5)]" : "bg-white/50"}`}><UserRound className="size-3.5 text-[#111735]/40" /><span className={`flex-1 truncate text-[10px] font-semibold ${ink}`}>{n}</span><Tag tone={t}>{s}</Tag></motion.div>)}
        </div>
      </div>
    </>
  );
}

type Variant = "a" | "b";
const scenes: Record<string, Record<Variant, () => React.JSX.Element>> = {
  crm: { a: CrmA, b: CrmB },
  "real-estate": { a: EstateA, b: EstateB },
  clinic: { a: ClinicA, b: ClinicB },
  agency: { a: AgencyA, b: AgencyB },
  commerce: { a: CommerceA, b: CommerceB },
  "ai-calling": { a: CallingA, b: CallingB },
};

const meshFor: Record<string, string> = { crm: "mesh-crm", "real-estate": "mesh-estate", clinic: "mesh-clinic", agency: "mesh-agency", commerce: "mesh-commerce", "ai-calling": "mesh-calling" };

/** A product scene on its own pastel mesh stage. Always the same 520:380 footprint. */
export function SceneStage({ slug, variant = "a", className = "" }: { slug: string; variant?: Variant; className?: string }) {
  const Scene = (scenes[slug] ?? scenes.crm)[variant];
  return (
    <div className={`scene-stage ${meshFor[slug] ?? "mesh-crm"} ${className}`}>
      <i aria-hidden className="absolute -left-10 -top-10 size-40 rounded-full bg-white/50 blur-3xl" />
      <i aria-hidden className="absolute -bottom-12 -right-8 size-44 rounded-full bg-white/40 blur-3xl" />
      <ScaleBox><Scene /></ScaleBox>
    </div>
  );
}
