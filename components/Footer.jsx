import Link from "next/link";
import { FOOTER } from "@/data/nav";

function Column({ col }) {
  return (
    <div className="footer-col">
      <h5>{col.title}</h5>
      <ul>
        {col.links.map((l) => (
          <li key={l.label}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <div className="logo footer-logo" style={{ marginBottom: "1.6rem" }}>
              <img src="/assets/brand/melorite-logo-light.png" alt="Melorite" />
            </div>
          </div>
          <Column col={FOOTER.sana} />
          <Column col={FOOTER.sanaLearn} />
          <Column col={FOOTER.company} />
        </div>
        <div className="footer-bottom">
          <span>© Melorite 2026</span>
          <div className="footer-social">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">X</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
