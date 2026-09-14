const DEFAULT_ITEMS = ["CRM", "Finance", "HR", "Projects", "Support", "Marketing", "Documents", "Analytics", "Automation", "AI", "Operations", "Collaboration"];

export default function Marquee({ items = DEFAULT_ITEMS }) {
  const group = (key) => (
    <div className="marquee-group" aria-hidden={key === "b" ? true : undefined} key={key}>
      {items.map((item) => <span className="marquee-capability" key={item}>{item}</span>)}
    </div>
  );
  return (
    <div className="partners">
      <div className="marquee">
        {group("a")}
        {group("b")}
      </div>
    </div>
  );
}
