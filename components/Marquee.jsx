const DEFAULT_LOGOS = [
  "piab", "merck", "robinhood", "swile", "hinge", "polestar", "foodora", "asics", "kearney", "brex",
];

export default function Marquee({ logos = DEFAULT_LOGOS }) {
  const group = (key) => (
    <div className="marquee-group" aria-hidden={key === "b" ? true : undefined} key={key}>
      {logos.map((name) => (
        <img key={name} src={`/assets/img/partners/${name}.svg`} alt={key === "a" ? name : ""} />
      ))}
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
