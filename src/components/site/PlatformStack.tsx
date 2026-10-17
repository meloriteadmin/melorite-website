import { BarChart3, Bot, Building2, Database, Headset, Lock, Megaphone, ShoppingBag, Stethoscope, Users, Workflow, Zap } from "lucide-react";

const products = [
  [Users, "CRM"], [Building2, "Real Estate"], [Stethoscope, "Clinic"], [Megaphone, "Agency"], [ShoppingBag, "Commerce"], [Headset, "AI Calling"],
] as const;
const layers = [
  [Users, "People"], [Database, "Records"], [Workflow, "Workflows"], [Zap, "Automation"], [Bot, "AI"], [BarChart3, "Reporting"],
] as const;

/** Layered architecture: six products sit on one shared platform, with live data flowing between them. */
export function PlatformStack() {
  return (
    <div aria-label="Six Melorite products running on one shared platform" className="mx-auto max-w-[920px] text-left">
      <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[.16em] text-[#111735]/45">Products</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {products.map(([Icon, name], i) => (
          <div key={name} style={{ animationDelay: `${i * .35}s` }} className="bob flex items-center gap-2.5 glass rounded-2xl px-3.5 py-3">
            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#eeeffe] text-[#4b4fe0]"><Icon className="size-4" /></span>
            <span className="text-[13.5px] font-semibold tracking-[-.01em]">{name}</span>
          </div>
        ))}
      </div>

      <div aria-hidden className="relative mx-auto my-1 hidden h-14 grid-cols-6 lg:grid">
        {products.map(([, name], i) => (
          <div key={name} className="relative">
            <span className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-[#5f63f2]/50 to-[#5f63f2]/10" />
            <span style={{ animationDelay: `${i * .45}s` }} className="flow-dot absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-[#5f63f2] shadow-[0_0_12px_3px_rgba(95,99,242,.55)]" />
          </div>
        ))}
      </div>
      <div className="h-5 lg:hidden" />

      <div className="glass glass-sheen rounded-[16px] p-2.5">
        <div className="glass-dark rounded-[16px] px-5 py-3.5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[15px] font-semibold tracking-[-.02em]">Melorite Platform</p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80"><Lock className="size-3" />Role-based access</span>
          </div>
        </div>
        <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {layers.map(([Icon, name]) => (
            <div key={name} className="flex flex-col gap-5 rounded-2xl border border-white/80 bg-white/55 p-4">
              <Icon className="size-5 text-[#4b4fe0]" strokeWidth={1.8} />
              <p className="text-[13.5px] font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
