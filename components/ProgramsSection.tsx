"use client";

import {
  Globe,
  Briefcase,
  GraduationCap,
  MessageCircle,
  Users,
  Plane,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const WHATSAPP =
  "https://wa.me/22890112233?text=Bonjour%20Coach%20Onésime,%20je%20souhaite%20m'inscrire%20à%20une%20formation.";

export default function ProgramsSection() {
  const { lang } = useLanguage();

  const content = {
    fr: {
      title: "Nos Programmes de Formation",
      subtitle:
        "Des formations conçues pour parler espagnol avec confiance, quel que soit votre niveau ou votre objectif.",

      button: "Je m'inscris",

      programs: [
        {
          title: "Espagnol Général",
          desc: "Débutant • Intermédiaire • Avancé.",
          icon: Globe,
        },
        {
          title: "Espagnol Professionnel",
          desc: "Entreprise, commerce, entretien d'embauche et carrière.",
          icon: Briefcase,
        },
        {
          title: "Préparation DELE / SIELE",
          desc: "Préparez les certifications internationales.",
          icon: GraduationCap,
        },
        {
          title: "Conversation Intensive",
          desc: "Parlez espagnol naturellement avec des mises en situation.",
          icon: MessageCircle,
        },
        {
          title: "Coaching Personnalisé",
          desc: "Programme individuel selon vos objectifs personnels.",
          icon: Users,
        },
        {
          title: "Espagnol pour Voyager",
          desc: "Voyage, tourisme, immigration et vie quotidienne.",
          icon: Plane,
        },
      ],
    },

    es: {
      title: "Nuestros Programas de Formación",
      subtitle:
        "Formaciones diseñadas para hablar español con confianza, sea cual sea tu nivel u objetivo.",

      button: "Quiero inscribirme",

      programs: [
        {
          title: "Español General",
          desc: "Inicial • Intermedio • Avanzado.",
          icon: Globe,
        },
        {
          title: "Español Profesional",
          desc: "Empresa, comercio, entrevistas y carrera profesional.",
          icon: Briefcase,
        },
        {
          title: "Preparación DELE / SIELE",
          desc: "Obtén certificaciones internacionales.",
          icon: GraduationCap,
        },
        {
          title: "Conversación Intensiva",
          desc: "Habla español con fluidez mediante situaciones reales.",
          icon: MessageCircle,
        },
        {
          title: "Coaching Personalizado",
          desc: "Acompañamiento individual según tus objetivos.",
          icon: Users,
        },
        {
          title: "Español para Viajar",
          desc: "Viajes, turismo, inmigración y vida cotidiana.",
          icon: Plane,
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id="programs" className="programs-section">
      <div className="programs-header">
        <span className="academy-label">FORMATIONS</span>

        <h2>{t.title}</h2>

        <p>{t.subtitle}</p>
      </div>

      <div className="programs-grid">
        {t.programs.map((program) => {
          const Icon = program.icon;

          return (
            <div className="program-card" key={program.title}>
              <div className="program-icon">
                <Icon size={36} />
              </div>

              <h3>{program.title}</h3>

              <p>{program.desc}</p>

              <a
                href={WHATSAPP}
                target="_blank"
                className="program-btn"
              >
                {t.button}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}