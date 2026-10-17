import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SceneStage } from "@/components/product/Scenes";

function Workspace({ calling = false }: { calling?: boolean }) {
  return (
    <div className={`overview-workspace ${calling ? "overview-workspace-front" : "overview-workspace-back"}`}>
      <aside aria-hidden="true">
        <strong>melorite</strong>
        <span className="overview-workspace-product">{calling ? "AI Calling" : "Business Suite"}</span>
        {(calling ? ["Overview", "Agents", "Conversations", "Workflows", "Knowledge", "Analytics"] : ["Overview", "Customers", "Pipeline", "Tasks", "Reports", "Settings"]).map((label, i) => <span key={label} className={i === 0 ? "overview-sidebar-active" : ""}>{label}</span>)}
      </aside>
      <div className="overview-workspace-content">
        <div className="overview-workspace-toolbar"><span>Overview</span><span>Help &nbsp; · &nbsp; Settings</span></div>
        <p className="overview-workspace-greeting">{calling ? "Every conversation, connected." : "Your business at a glance."}</p>
        <p className="overview-workspace-note">{calling ? "A clear view of your calls and customer conversations." : "Keep your customers, team and next steps in view."}</p>
        <SceneStage slug={calling ? "ai-calling" : "crm"} variant="b" />
      </div>
    </div>
  );
}

export function PlatformOverview() {
  return (
    <section data-nav="light" className="platform-overview">
      <div className="rail-inner">
        <div className="overview-copy">
          <h2 className="h-section">Business software and AI.<br />One connected foundation.</h2>
          <div className="overview-intros">
            <Link href="/products"><h3>Melorite Business Suite <ArrowUpRight size={17} /></h3><p>Manage customers, projects, appointments and everyday operations.</p></Link>
            <Link href="/products/ai-calling"><h3>Melorite AI Calling <ArrowUpRight size={17} /></h3><p>Answer calls, follow up and keep every conversation connected to your team.</p></Link>
          </div>
        </div>
        <div className="overview-preview" role="img" aria-label="Illustrative Melorite business and AI calling workspaces with sample data">
          <Workspace />
          <Workspace calling />
        </div>
      </div>
    </section>
  );
}
