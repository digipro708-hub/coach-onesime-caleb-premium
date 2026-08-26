"use client";

import Image from "next/image";
import { Award, BookOpen, Users } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function AboutSection() {
  const { lang } = useLanguage();

  const text = {
    fr: {
      badge: "À PROPOS DU COACH",
      title: "Pourquoi choisir le Coach Onésime Caleb ?",

      description:
        "Ayihadji Onésime Caleb KOUMAGNON est professeur d'espagnol, coach linguistique et promoteur de la langue espagnole. À travers l'Académie Espacio de Lengua, il accompagne des apprenants vers une maîtrise pratique, professionnelle et internationale de l'espagnol.",

      values: [
        {
          title: "Une méthode efficace",
          desc: "Des cours pratiques centrés sur la communication réelle, la prononciation et la confiance à l'oral.",
        },
        {
          title: "Des résultats concrets",
          desc: "Préparation aux examens, progression rapide et espagnol utile pour les études, le travail et les voyages.",
        },
        {
          title: "Un accompagnement personnalisé",
          desc: "Chaque apprenant bénéficie d'un suivi adapté à son niveau et à ses objectifs.",
        },
      ],

      stats: [
        ["1000+", "Apprenants accompagnés"],
        ["10+", "Pays touchés"],
        ["24/7", "Communauté d'entraide"],
      ],
    },

    es: {
      badge: "SOBRE EL COACH",
      title: "¿Por qué elegir al Coach Onésime Caleb?",

      description:
        "Ayihadji Onésime Caleb KOUMAGNON es profesor de español, coach lingüístico y promotor del idioma español. A través de la Academia Espacio de Lengua acompaña a estudiantes hacia un dominio práctico, profesional e internacional del español.",

      values: [
        {
          title: "Un método eficaz",
          desc: "Clases prácticas centradas en la comunicación real, la pronunciación y la confianza al hablar.",
        },
        {
          title: "Resultados concretos",
          desc: "Preparación de exámenes, progreso rápido y español útil para estudios, trabajo y viajes.",
        },
        {
          title: "Acompañamiento personalizado",
          desc: "Cada estudiante recibe un seguimiento adaptado a su nivel y objetivos.",
        },
      ],

      stats: [
        ["1000+", "Estudiantes acompañados"],
        ["10+", "Países alcanzados"],
        ["24/7", "Comunidad de apoyo"],
      ],
    },
  };

  const t = text[lang];

  const icons = [BookOpen, Award, Users];

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-photo">
          <Image
            src="/coach-onesime.jpg"
            alt="Coach Onésime Caleb"
            width={450}
            height={550}
            className="about-image"
          />
        </div>

        <div className="about-content">
          <span className="academy-label">{t.badge}</span>

          <h2>{t.title}</h2>

          <p>{t.description}</p>

          <div className="about-cards">
            {t.values.map((value, index) => {
              const Icon = icons[index];

              return (
                <div className="about-card" key={value.title}>
                  <Icon size={30} />
                  <div>
                    <h4>{value.title}</h4>
                    <p>{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="about-stats">
            {t.stats.map(([number, label]) => (
              <div key={label}>
                <h3>{number}</h3>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}