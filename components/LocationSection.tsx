import { MapPin } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function LocationSection() {
  const { lang } = useLanguage();

  return (
    <section id="location" className="location-section">
      <div className="section-title">
        <span>{lang === "fr" ? "ADRESSE" : "DIRECCIÓN"}</span>
       <h2>{lang === "fr" ? "Où nous trouver ?" : "¿Dónde encontrarnos?"}</h2>
      </div>

      <div className="location-card">
        <div className="location-icon">
          <MapPin size={36} />
        </div>

        <h3>ACADÉMIE ESPAGNOLE</h3>

        <h4>ESPACIO DE LENGUA</h4>

        <p className="house">Maison KOUMAGNON</p>

        <p className="address">
          Calavi, derrière la clôture de l'ORTB.
          <br />
          En quittant Bidossessi.
          <br />À 300 mètres du pavé.
        </p>

        <button className="maps-button">
          Google Maps (à compléter)
        </button>
      </div>
    </section>
  );
}