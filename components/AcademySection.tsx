"use client";

import { Globe, GraduationCap, Briefcase, Users } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function AcademySection() {
  const { lang } = useLanguage();

  const text = {
    fr: {
      title: "Académie Espacio de Lengua",
      subtitle:
        "Former une nouvelle génération de francophones capables de communiquer avec confiance en espagnol, pour les études, le travail et les opportunités internationales.",

      missionTitle: "Notre mission",
      mission:
        "Rendre l'espagnol accessible à tous grâce à une méthode moderne, pratique et orientée vers la communication réelle.",

      visionTitle: "Notre vision",
      vision:
        "Construire la plus grande communauté francophone d'apprenants d'espagnol en Afrique et au-delà.",

      cards: [
        {
          title: "Espagnol Général",
          desc: "Débutant, intermédiaire et avancé.",
        },
        {
          title: "Espagnol Professionnel",
          desc: "Pour le travail, les entreprises et les carrières.",
        },
        {
          title: "Préparation aux examens",
          desc: "DELE, SIELE et autres certifications.",
        },
        {
          title: "Coaching personnalisé",
          desc: "Accompagnement individuel selon vos objectifs.",
        },
      ],

      stats: [
        ["+1000", "Apprenants accompagnés"],
        ["10+", "Pays touchés"],
        ["100%", "Cours en ligne & présentiel"],
        ["24/7", "Communauté d'entraide"],
      ],
    },

    es: {
      title: "Academia Espacio de Lengua",
      subtitle:
        "Formar una nueva generación de francófonos capaces de comunicarse con confianza en español para los estudios, el trabajo y las oportunidades internacionales.",

      missionTitle: "Nuestra misión",
      mission:
        "Hacer que el español sea accesible para todos con un método moderno, práctico y centrado en la comunicación real.",

      visionTitle: "Nuestra visión",
      vision:
        "Construir la mayor comunidad francófona de estudiantes de español en África y más allá.",

      cards: [
        {
          title: "Español General",
          desc: "Nivel inicial, intermedio y avanzado.",
        },
        {
          title: "Español Profesional",
          desc: "Para empresas, empleo y carrera profesional.",
        },
        {
          title: "Preparación de exámenes",
          desc: "DELE, SIELE y otras certificaciones.",
        },
        {
          title: "Coaching personalizado",
          desc: "Acompañamiento individual según tus objetivos.",
        },
      ],

      stats: [
        ["+1000", "Estudiantes acompañados"],
        ["10+", "Países alcanzados"],
        ["100%", "Cursos online y presenciales"],
        ["24/7", "Comunidad de apoyo"],
      ],
    },
  };

  const t = text[lang];

  const icons = [
    <Globe size={34} />,
    <Briefcase size={34} />,
    <GraduationCap size={34} />,
    <Users size={34} />,
  ];

  return (
    <section id="academy" className="academy-section">

      <div className="academy-header">
        <span className="academy-label">ACADEMIA</span>

        <h2>{t.title}</h2>

        <p>{t.subtitle}</p>
      </div>

      <div className="academy-info">
        <div className="academy-box">
          <h3>{t.missionTitle}</h3>
          <p>{t.mission}</p>
        </div>

        <div className="academy-box">
          <h3>{t.visionTitle}</h3>
          <p>{t.vision}</p>
        </div>
      </div>

      <div className="academy-cards">
        {t.cards.map((card, index) => (
          <div className="academy-card" key={card.title}>
            <div className="academy-icon">{icons[index]}</div>

            <h4>{card.title}</h4>

            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="academy-stats">
        {t.stats.map(([number, label]) => (
          <div className="stat-card" key={label}>
            <h3>{number}</h3>
            <span>{label}</span>
          </div>
        ))}
      </div>

    </section>
  );
}