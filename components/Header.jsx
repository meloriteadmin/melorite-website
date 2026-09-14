"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getNav } from "@/data/nav";

function Chevron() {
  return (
    <svg className="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const NAV = getNav(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("noscroll", mobileOpen);
    setMobileOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="siteHeader">
        <div className="container">
          <Link href="/" className="logo" aria-label="Melorite home">
            <img src="/assets/brand/melorite-logo.png" alt="Melorite" />
          </Link>

          <nav className="site-nav">
            <ul>
              {NAV.map((item) => (
                <li key={item.label} className={item.items ? "has-sub-menu" : undefined}>
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <button type="button">
                      {item.label} <Chevron />
                    </button>
                  )}
                  {item.items && (
                    <div className={`sub-menu-menus${item.wide ? " wide" : ""}`}>
                      {item.items.map((group, gi) => (
                        <div className="sub-menu-menu" key={gi}>
                          {group.group && <div className="sub-menu-menu-title">{group.group}</div>}
                          <ul>
                            {group.links.map((l) => (
                              <li key={l.label}>
                                <Link href={l.href} className={pathname === l.href ? "active" : undefined}>
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-right">
            <Link href="/platform" className="header-link">About</Link>
            <Link href="/contact" className="header-link">Partners</Link>
            <Link href="/contact" className="login-link">Log in</Link>
            <Link href="/contact" className="btn">Talk to us</Link>
            <button
              className={`burger${mobileOpen ? " open" : ""}`}
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav${mobileOpen ? " open" : ""}`}>
        {NAV.map((item) =>
          item.href ? (
            <Link key={item.label} href={item.href} className="top-link">
              {item.label}
            </Link>
          ) : (
            <details className="mobile-nav-group" key={item.label}>
              <summary>{item.label}</summary>
              {item.items.map((group, gi) => (
                <div key={gi}>
                  {group.group && <div className="sub-menu-menu-title">{group.group}</div>}
                  <ul>
                    {group.links.map((l) => (
                      <li key={l.label}>
                        <Link href={l.href}>{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </details>
          )
        )}
        <Link href="#" className="top-link">About</Link>
        <Link href="#" className="top-link">Partners</Link>
        <a href="#" className="btn">Talk to us</a>
      </div>
    </>
  );
}
