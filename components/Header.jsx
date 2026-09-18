"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const [openMenu, setOpenMenu] = useState(null);
  const headerRef = useRef(null);
  const pathname = usePathname();
  const navItems = getNav(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("noscroll", mobileOpen);
    return () => document.body.classList.remove("noscroll");
  }, [mobileOpen]);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  return (
    <>
      <header ref={headerRef} className={`site-header${scrolled ? " scrolled" : ""}`} id="siteHeader">
        <div className="container">
          <Link href="/" className="logo" aria-label="Melorite home">
            <img src="/assets/brand/melorite-logo.png" alt="Melorite" />
          </Link>

          <nav className="site-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.label} className={`${item.items ? "has-sub-menu" : ""}${openMenu === item.label ? " open" : ""}`}>
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <button type="button" aria-expanded={openMenu === item.label} aria-controls={`${item.label.toLowerCase()}-menu`} onClick={() => setOpenMenu((current) => current === item.label ? null : item.label)}>
                      {item.label} <Chevron />
                    </button>
                  )}
                  {item.items && (
                    <div id={`${item.label.toLowerCase()}-menu`} className="sub-menu-menus">
                      {item.items.map((group, gi) => (
                        <div className="sub-menu-menu" key={gi}>
                          {group.group && <div className="sub-menu-menu-title">{group.group}</div>}
                          <ul>
                            {group.links.map((l) => (
                              <li key={l.label}>
                                <Link href={l.href} className={pathname === l.href ? "active" : undefined} onClick={() => setOpenMenu(null)}>
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
            <Link href="/demo" className="header-link">Request demo</Link>
            <Link href="/get-started" className="btn">Get started</Link>
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
        {navItems.map((item) =>
          item.href ? (
            <Link key={item.label} href={item.href} className="top-link" onClick={() => setMobileOpen(false)}>
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
                        <Link href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </details>
          )
        )}
        <Link href="/demo" className="top-link" onClick={() => setMobileOpen(false)}>Request demo</Link>
        <Link href="/get-started" className="btn" onClick={() => setMobileOpen(false)}>Get started</Link>
      </div>
    </>
  );
}
