import { ArrowRight, Blocks, Check, MousePointerClick, Network, Plus } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";

const frame = "pane mx-auto w-[78%] p-4 text-left";

function Flow() {
  const steps = ["Enquiry", "Site visit", "Booking"];
  return (
    <div className={frame}>
      <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-[#111735]/40">Buyer journey</p>
      <ol className="mt-3 space-y-2">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2.5">
            <span className={`grid size-6 place-items-center rounded-full text-[10px] font-semibold ${i < 2 ? "bg-[#4b4fe0] text-white" : "bg-[#eeeffe] text-[#4b4fe0]"}`}>{i < 2 ? <Check className="size-3" /> : i + 1}</span>
            <span className="flex-1 rounded-lg bg-white/60 px-2.5 py-1.5 text-[12px] font-medium">{s}</span>
            {i < 2 && <ArrowRight className="size-3 text-[#4b4fe0]/50" />}
          </li>
        ))}
      </ol>
    </div>
  );
}

function Calm() {
  const rows = [["Call Aarav", true], ["Send quote", true], ["Confirm visit", false]] as const;
  return (
    <div className={frame}>
      <div className="flex items-center justify-between"><p className="text-[12px] font-semibold">Today</p><span className="text-[10px] text-[#111735]/45">2 of 3 done</span></div>
      <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-[#eeeffe]"><i className="block h-full w-2/3 rounded-full bg-gradient-to-r from-[#7a7eff] to-[#4b4fe0]" /></div>
      <ul className="mt-3 space-y-1.5">
        {rows.map(([t, done]) => (
          <li key={t} className="flex items-center gap-2.5 rounded-lg bg-white/60 px-2.5 py-2 text-[12px] font-medium">
            <span className={`grid size-4 place-items-center rounded-md ${done ? "bg-[#4b4fe0] text-white" : "border border-[#4b4fe0]/40"}`}>{done && <Check className="size-3" />}</span>
            <span className={done ? "text-[#111735]/50 line-through" : ""}>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Modular() {
  return (
    <div className={frame}>
      <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-[#111735]/40">Your workspace</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {["Leads", "Approvals", "Portal"].map((b, i) => <div key={b} className={`rounded-xl px-3 py-4 text-[12px] font-semibold ${["bg-[#eeeffe] text-[#4b4fe0]", "bg-[#ffe9dc] text-[#b4552d]", "bg-[#ece6ff] text-[#6b45d6]"][i]}`}>{b}</div>)}
        <div className="grid place-items-center rounded-xl border border-dashed border-[#4b4fe0]/40 text-[#4b4fe0]"><Plus className="size-4" /></div>
      </div>
    </div>
  );
}

const cards = [
  { Icon: Network, title: "Understands the job", body: "Starts from the records, decisions and hand-offs a business already works with.", mesh: "mesh-crm", Visual: Flow },
  { Icon: MousePointerClick, title: "Simple for the team", body: "Calm screens and clear language, so people adopt it instead of avoiding it.", mesh: "mesh-estate", Visual: Calm },
  { Icon: Blocks, title: "Adapts where needed", body: "Extend a product or build around the process when the standard flow is not enough.", mesh: "mesh-agency", Visual: Modular },
] as const;

export function WhyCards() {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {cards.map(({ Icon, title, body, mesh, Visual }, i) => (
        <Reveal key={title} delay={i * 0.1} className="glass glass-sheen glass-lift flex flex-col overflow-hidden rounded-[16px] p-2.5">
          <div className={`${mesh} grain relative grid aspect-[1.35] place-items-center overflow-hidden rounded-[24px]`}>
            <span className="absolute left-4 top-4 z-10 grid size-10 place-items-center rounded-xl bg-white/80 text-[#4b4fe0] shadow-[inset_0_1px_0_#fff,0_8px_18px_-10px_rgba(95,99,242,.6)] backdrop-blur"><Icon className="size-[18px]" strokeWidth={1.8} /></span>
            <div className="relative z-10 w-full pt-8"><Visual /></div>
          </div>
          <div className="p-5 pb-6">
            <h3 className="text-[22px] font-semibold tracking-[-.03em]">{title}</h3>
            <p className="mt-2 text-[15.5px] leading-[1.55] text-[#4a4e6d]">{body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
