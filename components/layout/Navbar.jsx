"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/config";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      setHidden(currentY > 120 && currentY > lastY && !menuOpen);
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav ${hidden ? "is-hidden" : ""} ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav__inner">
          <Link href="/" className="nav__logo" onClick={closeMenu} aria-label="Ahmad Ibrahim home">
            <span className="nav__logo-mark" />
            <span>AHMAD / 01</span>
          </Link>
          <nav className="nav__links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <div className="nav__link-wrap" key={link.href}>
                <a href={link.href} className="nav__link" data-cursor="OPEN">
                  <small>{link.number}</small>{link.label}
                </a>
              </div>
            ))}
          </nav>
          <button
            type="button"
            className="nav__menu-button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      <div id="mobile-navigation" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__links" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="mobile-menu__link" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              <span>{link.number}</span>{link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
