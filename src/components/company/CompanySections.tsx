import { ChevronDown } from "lucide-react";
import styles from "./CompanyPages.module.css";

export function WorkingSteps() {
  return <div className={styles.steps}>{[
    ["01", "A useful first conversation", "Tell us what your team manages, which tools you use and where work gets held up."],
    ["02", "A plan for your setup", "Explore the relevant product or custom solution, with requirements and scope agreed before work begins."],
    ["03", "Help as you get started", "Prepare your workspace, guide your team and agree on the support you need after launch."],
  ].map(([n, title, body]) => <div key={n} className={styles.step}><span>{n}</span><h3>{title}</h3><p>{body}</p></div>)}</div>;
}

export function CompanyFAQ({ items }: { items: { question: string; answer: string }[] }) {
  return <div className={styles.faq}><h2>Frequently<br />asked questions</h2><div>{items.map(({ question, answer }) => <details key={question}><summary>{question}<ChevronDown size={16} /></summary><p>{answer}</p></details>)}</div></div>;
}
