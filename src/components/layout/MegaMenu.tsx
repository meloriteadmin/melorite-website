import Link from "next/link";
import { businessApplications, industrySolutions } from "@/data/catalog";
import { Icon } from "@/lib/icons";
import { tint } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Arrow } from "@/components/shared/Button";

function Item({ href, title, description, icon, accent }: { href: string; title: string; description: string; icon: string; accent: string }) {
  return <NavigationMenuLink asChild><Link href={href} className="group flex-row items-start gap-3"><span className="grid size-8 shrink-0 place-items-center rounded-lg" style={{ background: tint(accent, .1), color: accent }}><Icon name={icon} className="size-4" /></span><span><span className="block text-sm font-medium text-navy">{title}</span><span className="block text-[12.5px] leading-5 text-muted">{description}</span></span></Link></NavigationMenuLink>;
}
function Menu({ children, href, label }: { children: React.ReactNode; href: string; label: string }) {
  return <div className="w-[min(820px,calc(100vw-3rem))] p-6"><div className="grid grid-cols-2 gap-x-6 gap-y-1">{children}</div><NavigationMenuLink asChild><Link href={href} className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:bg-transparent hover:text-brand-700">{label} <Arrow /></Link></NavigationMenuLink></div>;
}
export function BusinessMenu() { return <Menu href="/business-applications" label="Explore Business Applications">{businessApplications.map(x => <Item key={x.slug} href={`/business-applications/${x.slug}`} title={x.name} description={x.eyebrow} icon={x.icon} accent={x.accent} />)}</Menu>; }
export function AiMenu() { return <Menu href="/ai" label="Explore Melorite AI"><Item href="/ai/agent" title="AI Agent" description="Intelligence and automation across your business." icon="Sparkles" accent="#2563eb" /><Item href="/ai/calling" title="AI Calling" description="AI-powered inbound and outbound business conversations." icon="PhoneCall" accent="#7c3aed" /></Menu>; }
export function IndustriesMenu() { return <Menu href="/industries" label="Explore Industry Solutions">{industrySolutions.map(x => <Item key={x.slug} href={`/industries/${x.slug}`} title={x.name} description="Built on the connected Melorite platform." icon={x.icon} accent={x.accent} />)}</Menu>; }
