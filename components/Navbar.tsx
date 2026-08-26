"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Accueil", href: "#hero" },
    { name: "Académie", href: "#academy" },
    { name: "Programmes", href: "#programs" },
    { name: "À propos", href: "#about" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Réseaux", href: "#social" },
    { name: "Adresse", href: "#location" },
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">

          <div className="navbar-logo">
            ESPACIO DE LENGUA
          </div>

          <nav className="navbar-links desktop-links">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </nav>

          <div className="navbar-right">

            <div className="desktop-language">
              <LanguageSwitcher />
            </div>

            <button
              className="menu-button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu size={26} />
            </button>

          </div>

        </div>
      </header>

      {/* Overlay */}
      <div
        className={`mobile-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Menu mobile */}
      <aside className={`mobile-menu ${open ? "open" : ""}`}>

        <div className="mobile-menu-header">

          <h3>ESPACIO DE LENGUA</h3>

          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>

        </div>

        <div className="mobile-language">
          <LanguageSwitcher />
        </div>

        <nav className="mobile-menu-links">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

      </aside>
    </>
  );
}