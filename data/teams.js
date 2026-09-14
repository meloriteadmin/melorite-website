export const TEAMS = {
  "sales-gtm": {
    title: "Sales & GTM",
    metaTitle: "Sana for sales and GTM",
    lede: "See how leading go-to-market teams supercharge every rep with an AI sales assistant.",
    quote: "With Sana, our sales prep is now 10x quicker. Instead of spending hours gathering data manually, our team can instantly access the research insights they need.",
    quoteBy: "Product Operations Lead",
    quoteRole: "International research and analytics firm",
    stat: { label: "Global productivity partner creates sales assistant to automate manual tasks", value: "50%", desc: "time savings" },
    benefitsHead: "Supercharge every rep with an AI sales assistant",
    benefits: [
      { title: "Prep smarter for every sales call", body: "Cut the research time in half by giving every rep an assistant that can search the web, access your CRM, and understand all your product and sales data sources to draft relevant outreach collateral." },
      { title: "Qualify prospects faster with better data", body: "When every meeting is summarized and transcribed, reps can focus properly on qualification. Their AI agent will suggest follow-up emails based on prospect information and update CRM fields automatically." },
      { title: "Automate RFP and security questionnaires", body: "No more bottlenecks. Simply upload the file you need to complete, and let your sales assistant populate it for you based on the latest product and security data." },
      { title: "Empower reps to upskill themselves", body: "Sales reps get detailed feedback on calls and meetings with Sana's built-in AI notetaker, and can self-identify improvement areas across multiple calls by asking their assistant to analyze a collection of meetings." },
    ],
    integrations: [
      ["salesforce", "Salesforce"], ["hubspot", "HubSpot Sales Hub"], ["gmail", "Gmail"], ["outlook", "Outlook"],
      ["slack", "Slack"], ["zoom", "Zoom"], ["google-meet", "Google Meet"], ["teams", "Microsoft Teams"],
    ],
  },
  marketing: {
    title: "Marketing",
    metaTitle: "AI that transforms marketing team productivity",
    lede: "See how modern marketing teams put superpowers at everyone’s fingertips, from writing to campaign optimization.",
    quote: "With Sana Agents, even colleagues who aren’t tech-savvy can leverage AI in their everyday work. It’s empowered everyone, not just the experts.",
    quoteBy: "Head of Digitalization",
    quoteRole: "Major real estate group",
    stat: null,
    benefitsHead: "Marketing superpowers at everyone’s fingertips",
    benefits: [
      { title: "An expert writer for every team", body: "Let your AI marketing assistant check for consistency, suggest edits based on tone of voice, and empower everyone to brainstorm on-brand content ideas." },
      { title: "Hyper-personalized outreach", body: "No more manual time spent individualizing emails and other content. Your assistant can leverage data from CRMs and other tools to personalize messages with speed and precision. At scale." },
      { title: "Regenerative and repurposed content", body: "Convert webinars into white papers, turn product specs into announcement blogs. Translate it all into 50+ languages, tailored to any user persona or industry vertical." },
      { title: "24/7 campaign optimization", body: "More ideation, less project management. Ask your assistant to update team boards, summarize campaign performance, and suggest ideas for improving key marketing metrics based on real-time data." },
    ],
    integrations: [
      ["hubspot", "HubSpot Marketing Hub"], ["google-drive", "Google Drive"], ["notion", "Notion"],
      ["figma", "Figma"], ["slack", "Slack"], ["airtable", "Airtable"], ["mixpanel", "Mixpanel"],
    ],
  },
  "in-house-operations": {
    title: "In-house operations",
    metaTitle: "Sana for in-house operations",
    lede: "See how HR, finance, and legal teams optimize every aspect of their in-house operations with AI.",
    quote: "All of a sudden, a valuation memo that our CFO previously spent almost a week preparing was completed within three or four hours.",
    quoteBy: "Chief Sustainability Officer",
    quoteRole: "Leading renewable energy company",
    stat: { label: "Global productivity partner automates in-house operations", value: "50%", desc: "time savings" },
    benefitsHead: "Optimize every aspect of your in-house operations",
    benefits: [
      { title: "Scale your people team infinitely", body: "With a tailored AI HR assistant, HR teams can generate job postings, automate interview note-taking, and ensure every employee question gets answered instantly—based on the latest company data." },
      { title: "Make finance feel automagical", body: "Finance teams can automate qualitative reporting tasks, extract trends from unstructured data, and synthesize themes from multiple sources for better executive decision-making." },
      { title: "Get true legal leverage", body: "Cut the manual admin with a legal assistant that instantly identifies key risks from diligence sources, uncovers critical nuances, and generates contracts in line with company templates." },
    ],
    integrations: [
      ["workday", "Workday"], ["sharepoint", "Microsoft Sharepoint"], ["google-drive", "Google Drive"],
      ["slack", "Slack"], ["salesforce", "Salesforce"], ["servicenow", "ServiceNow"],
    ],
  },
  "customer-support": {
    title: "Customer support",
    metaTitle: "Sana for customer support",
    lede: "See how support teams unlock outstanding service at scale with an AI support assistant.",
    quote: "With Sana Agents, even colleagues who aren’t tech-savvy can leverage AI in their everyday work.",
    quoteBy: "Head of Digitalization",
    quoteRole: "Major real estate group",
    stat: { label: "AI agent helps accessibility manufacturer resolve support queries", value: "20%", desc: "faster resolution" },
    benefitsHead: "Unlock outstanding service at scale",
    benefits: [
      { title: "Cut the manual support admin", body: "With an AI support assistant on hand, your support team can automatically triage and assign incoming support tickets based on topic and complexity, saving each lead up to 5 hours of manual work per week." },
      { title: "Resolve queries at lightning speed", body: "No more knowledge bottlenecks. You can shorten response times and increase answer accuracy by grounding your support assistant in the latest product and service data." },
      { title: "Drive satisfaction through better insight", body: "Send personalized responses based on previous interactions. Analyze 1000+ support calls and get actionable feedback on how to improve satisfaction scores across the team." },
      { title: "Streamline support onboarding", body: "Pairing new support reps with an AI agent reduces time to productivity. They get instant answers as well as detailed feedback on customer support calls—right down to the last second." },
    ],
    integrations: [
      ["zendesk", "Zendesk"], ["intercom", "Intercom"], ["salesforce", "Salesforce"],
      ["slack", "Slack"], ["servicenow", "ServiceNow"], ["confluence", "Confluence"],
    ],
  },
};

export const TEAM_SLUGS = Object.keys(TEAMS);
