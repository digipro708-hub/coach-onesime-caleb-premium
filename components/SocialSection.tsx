import { Facebook, ArrowUpRight, Play } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function SocialSection() {
  const { lang } = useLanguage();
  return (
    <section id="social" className="social-section">
      <div className="section-title">
       <span>{lang === "fr" ? "COMMUNAUTÉ" : "COMUNIDAD"}</span>
       <h2>{lang === "fr" ? "Suivez-moi" : "Sígueme"}</h2>

        <p>
  {lang === "fr"
    ? "Retrouvez les activités, conseils et contenus de l'Académie Espacio de Lengua sur mes réseaux sociaux."
    : "Encuentra las actividades, consejos y contenidos de la Academia Espacio de Lengua en mis redes sociales."}
</p>
      </div>

      <div className="social-grid">
        <a
          href="https://www.tiktok.com/@coachonesimecaleb"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <div className="social-icon">
            <Play size={30} />
          </div>

          <div className="social-content">
            <span className="social-label">TikTok</span>
            <h3>@coachonesimecaleb</h3>
            <p>
  {lang === "fr"
    ? "Conseils, vidéos et coaching en espagnol."
    : "Consejos, videos y coaching en español."}
</p>
          </div>

          <ArrowUpRight className="social-arrow" />
        </a>

        <a
          href="https://www.facebook.com/share/1BsdE2wdWs/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <div className="social-icon">
            <Facebook size={30} />
          </div>

          <div className="social-content">
            <span className="social-label">Facebook</span>
            <h3>Coach Onésime Caleb KOUMAGNON</h3>
           <p>
  {lang === "fr"
    ? "Actualités de l'Académie Espacio de Lengua."
    : "Noticias de la Academia Espacio de Lengua."}
</p>
          </div>

          <ArrowUpRight className="social-arrow" />
        </a>
      </div>
    </section>
  );
}