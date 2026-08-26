"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { lang } = useLanguage();

  const text = {
    fr: {
      coach: "Coach",
      slogan: "Une langue, mille possibilités.",
      academy: "Académie Espacio de Lengua",
      roles: [
        "Professeur d'espagnol",
        "Coach de langue espagnole",
        "Promoteur de la langue espagnole",
        "Président de l'ONG Espagnol Pour Tous",
      ],
    },
    es: {
      coach: "Coach",
      slogan: "Un idioma, mil posibilidades.",
      academy: "Academia Espacio de Lengua",
      roles: [
        "Profesor de español",
        "Coach de lengua española",
        "Promotor del idioma español",
        "Presidente de la ONG Español Para Todos",
      ],
    },
  };

  const t = text[lang];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">

        {/* Logo */}
       <div className="logo-circle">
  <Image
    src="/Logo.png"
    alt="Logo Académie Espacio de Lengua"
    width={140}
    height={140}
    priority
  />
</div>

        {/* Photo */}
        <div className="hero-photo">
          <Image
            src="/coach-onesime.jpg"
            alt="Coach Onésime Caleb Ayihadji KOUMAGNON"
            width={320}
            height={320}
            className="hero-photo-img"
            priority
          />
        </div>

        {/* Nom */}
        <span className="coach-script">{t.coach}</span>

        <h1 className="hero-firstname">Onésime Caleb</h1>

        <h2 className="hero-lastname">Ayihadji KOUMAGNON</h2>

        <div className="hero-divider"></div>

        {/* Fonction */}
        <div className="hero-functions">
          {t.roles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>

        {/* Slogan */}
        <p className="hero-slogan">{t.slogan}</p>
      </div>
    </section>
  );
}