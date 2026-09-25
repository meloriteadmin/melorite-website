export type AIProduct = {
  id: "ai-agent" | "ai-calling";
  name: string;
  tagline: string;
  description: string;
  icon: string;
  accent: string;
  capabilities: string[];
};

export const aiProducts: AIProduct[] = [
  {
    id: "ai-agent",
    name: "AI Agent",
    tagline: "An intelligent assistant that works across your Melorite workspace.",
    description: "Give teams guided answers, summaries and next-step support using the context they are permitted to access.",
    icon: "Sparkles",
    accent: "#9b51e0",
    capabilities: ["Workspace assistance", "Contextual answers", "Task support", "Permission-aware experiences"],
  },
  {
    id: "ai-calling",
    name: "AI Calling",
    tagline: "AI-assisted calling for responsive, consistent customer engagement.",
    description: "Support calling workflows with structured outcomes, follow-ups and a clear connection to the customer record.",
    icon: "PhoneCall",
    accent: "#e0418a",
    capabilities: ["Call workflows", "Structured outcomes", "Follow-up creation", "CRM context"],
  },
];
