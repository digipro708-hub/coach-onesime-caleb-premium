"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function ContactSection() {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="contact-section">
      <div className="section-title">
       <span>{lang === "fr" ? "CONTACT" : "CONTACTO"}</span>
        <h2>{lang === "fr" ? "Contactez-moi" : "Contáctame"}</h2>
      </div>

      <div className="contact-grid">
        <a href="tel:+2290144686974" className="contact-card gold">
          <Phone size={28} strokeWidth={2.3} />
          <div>
           <h3>{lang === "fr" ? "Appeler" : "Llamar"}</h3>
            <p>+229 01 44 68 69 74</p>
          </div>
        </a>

        <a
          href="https://wa.me/2290167345084"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <MessageCircle size={28} strokeWidth={2.3} />
          <div>
            <h3>{lang === "fr" ? "WhatsApp" : "WhatsApp"}</h3>
            <p>+229 01 67 34 50 84</p>
          </div>
        </a>

        <a href="mailto:okoum2018@gmail.com" className="contact-card">
          <Mail size={28} strokeWidth={2.3} />
          <div>
            <h3>{lang === "fr" ? "E-mail" : "Correo electrónico"}</h3>
            <p>okoum2018@gmail.com</p>
          </div>
        </a>
      </div>
    </section>
  );
}