"use client";

import { Star } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const testimonials = [
  {
    name: "Marie A.",
    country: "🇹🇬 Togo",
    fr: "Grâce au Coach Onésime Caleb, j'ai enfin osé parler espagnol avec confiance. Les cours sont clairs, motivants et très pratiques.",
    es: "Gracias al Coach Onésime Caleb, por fin me atreví a hablar español con confianza. Las clases son claras, motivadoras y muy prácticas."
  },
  {
    name: "Carlos D.",
    country: "🇪🇸 Espagne",
    fr: "Une excellente pédagogie et une approche moderne de l'apprentissage des langues. Je recommande vivement cette académie.",
    es: "Una excelente pedagogía y un enfoque moderno para aprender idiomas. Recomiendo totalmente esta academia."
  },
  {
    name: "Awa K.",
    country: "🇧🇯 Bénin",
    fr: "Les exercices, les conversations et le suivi personnalisé m'ont permis de progresser rapidement.",
    es: "Los ejercicios, las conversaciones y el seguimiento personalizado me permitieron progresar muy rápido."
  }
];

export default function TestimonialsSection() {
  const { lang } = useLanguage();
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-title">
        <span className="section-subtitle">
          {lang === "fr" ? "Ils nous font confiance" : "Ellos confían en nosotros"}
        </span>

        <h2>
          {lang === "fr"
            ? "Témoignages de nos apprenants"
            : "Testimonios de nuestros estudiantes"}
        </h2>

        <p>
          {lang === "fr"
            ? "Découvrez ce que nos étudiants disent de leur expérience avec l'Académie Espacio de Lengua."
            : "Descubre lo que nuestros estudiantes dicen sobre su experiencia en la Academia Espacio de Lengua."}
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">

            <div className="testimonial-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="#ECB34F"
                  color="#ECB34F"
                />
              ))}
            </div>

            <p className="testimonial-text">
              “{lang === "fr" ? item.fr : item.es}”
            </p>

            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4>{item.name}</h4>
                <span>{item.country}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}