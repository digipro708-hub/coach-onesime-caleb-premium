"use client";

import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "#hero" },
    { name: "Académie", href: "#academy" },
    { name: "Contact", href: "#contact" },
    { name: "Réseaux", href: "#social" },
    { name: "Adresse", href: "#location" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">ESPACIO DE LENGUA</div>

        <div className="navbar-right">
          <LanguageSwitcher />

          {/* Bouton menu mobile */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Menu desktop */}
          <nav className="navbar-links desktop-menu">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="mobile-menu">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}