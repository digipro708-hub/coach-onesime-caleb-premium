"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import QRCode from "react-qr-code";
import {
  Download,
  Share2,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

export default function DigitalCard() {
  const [cardUrl, setCardUrl] = useState(
    "https://espaciodelengua.vercel.app"
  );

  useEffect(() => {
    setCardUrl(window.location.href);
  }, []);

  const shareCard = async () => {
    const shareData = {
      title: "Coach Onésime Caleb KOUMAGNON",
      text: "Découvrez la carte digitale de l'Académie Espacio de Lengua.",
      url: cardUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(cardUrl);
        alert("Lien copié dans le presse-papiers.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="card" className="digital-card-section">
      <div className="digital-card">
        {/* Logo */}
        <div className="digital-top">
          <Image
            src="/Logo.png"
            alt="Logo Académie Espacio de Lengua"
            width={90}
            height={90}
            className="digital-logo"
          />

          <span className="digital-badge">
            ACADÉMIE ESPACIO DE LENGUA
          </span>
        </div>

        {/* Photo */}
        <Image
          src="/coach-onesime.jpg"
          alt="Coach Onésime Caleb"
          width={180}
          height={180}
          className="digital-photo"
        />

        {/* Nom */}
        <h2 className="digital-name">Onésime Caleb</h2>

        <h3 className="digital-lastname">
          Ayihadji KOUMAGNON
        </h3>

        {/* Fonction */}
        <p className="digital-job">
          Professeur d'espagnol • Coach linguistique
        </p>

        {/* QR Code */}
        <div className="qr-wrapper">
          <QRCode
            value={cardUrl}
            size={150}
            fgColor="#ECB34F"
            bgColor="#FFFFFF"
          />
        </div>

        <p className="digital-text">
          Une langue, mille possibilités.
        </p>

        {/* Boutons */}
        <div className="digital-buttons">
          <a href="/contact.vcf" download>
            <Download size={18} />
            Ajouter à mes contacts
          </a>

          <a href="tel:+22890112233">
            <Phone size={18} />
            Appeler
          </a>

          <a
            href="mailto:contact@espaciodelengua.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={18} />
            Envoyer un e-mail
          </a>

          <a
            href="https://wa.me/22890112233"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <button onClick={shareCard}>
            <Share2 size={18} />
            Partager cette carte
          </button>
        </div>
      </div>
    </section>
  );
}