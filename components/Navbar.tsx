"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const links = [
  { href: "#hero", label: lang === "fr" ? "Accueil" : "Inicio" },
  { href: "#academy", label: lang === "fr" ? "Académie" : "Academia" },
  { href: "#programs", label: lang === "fr" ? "Programmes" : "Programas" },
  { href: "#about", label: lang === "fr" ? "À propos" : "Sobre mí" },
  { href: "#testimonials", label: lang === "fr" ? "Témoignages" : "Testimonios" },
  { href: "#contact", label: lang === "fr" ? "Contact" : "Contacto" },
  { href: "#social", label: lang === "fr" ? "Communauté" : "Comunidad" },
  { href: "#location", label: lang === "fr" ? "Adresse" : "Dirección" },
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
              <a key={link.label} href={link.href}>
                {link.label}
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
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

      </aside>
    </>
  );
}