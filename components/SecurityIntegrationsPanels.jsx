import Reveal from "@/components/Reveal";

const INTEGRATIONS = [
  ["google-meet", "Google Meet"], ["confluence", "Confluence"], ["teams", "Microsoft Teams"],
  ["google-drive", "Google Drive"], ["jira", "Jira"], ["sharepoint", "Microsoft Sharepoint"],
  ["google-calendar", "Google Calendar"], ["servicenow", "Service Now"], ["workday", "Workday"],
  ["dropbox", "Dropbox"], ["salesforce", "Salesforce"], ["slack", "Slack"],
];

const SECURITY = [
  ["security-01", "Custom user roles"], ["security-02", "Encryption"], ["security-03", "Flexible groups"],
  ["security-04", "User provisioning"], ["security-05", "SOC 2 Type 2"], ["security-06", "GDPR compliant"],
  ["security-07", "ISO 27001"], ["security-08", "SAML single sign-on"], ["security-09", "Advanced permissions"],
  ["security-10", "Domain verification"], ["security-11", "Regional deploys"], ["security-12", "Audit logging"],
];

export default function SecurityIntegrationsPanels() {
  return (
    <section>
      <div className="container">
        <Reveal as="div" className="section-head">
          <h2>Enterprise-grade<br />integrations and security</h2>
          <p className="lede">Sana connects with 100+ applications and unifies your company&rsquo;s data securely.</p>
        </Reveal>

        <div className="integrations-security">
          <Reveal as="div" className="panel">
            <h4>Connect your daily tools automatically</h4>
            <div className="icon-grid">
              {INTEGRATIONS.map(([icon, name]) => (
                <div className="icon-item" key={icon}>
                  <span className="icon-badge"><img src={`/assets/img/integrations/${icon}.svg`} alt="" /></span>
                  {name}
                </div>
              ))}
            </div>
            <a href="/integrations" className="btn btn-small">See full integrations list</a>
          </Reveal>

          <Reveal as="div" className="panel">
            <h4>Security you can stand by</h4>
            <div className="icon-grid">
              {SECURITY.map(([icon, name]) => (
                <div className="icon-item" key={icon}>
                  <span className="icon-badge"><img src={`/assets/img/integrations/${icon}.svg`} alt="" /></span>
                  {name}
                </div>
              ))}
            </div>
            <a href="/security" className="btn btn-small">Read more about privacy</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
