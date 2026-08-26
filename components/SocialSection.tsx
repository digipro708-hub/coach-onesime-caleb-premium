import { Facebook, ArrowUpRight, Play } from "lucide-react";

export default function SocialSection() {
  return (
    <section id="social" className="social-section">
      <div className="section-title">
        <span>COMMUNAUTÉ</span>
        <h2>Suivez-moi</h2>

        <p className="social-subtitle">
          Retrouvez les activités, conseils et contenus de l'Académie Espacio de
          Lengua sur mes réseaux sociaux.
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
            <p>Conseils, vidéos et coaching en espagnol.</p>
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
            <p>Actualités de l'Académie Espacio de Lengua.</p>
          </div>

          <ArrowUpRight className="social-arrow" />
        </a>
      </div>
    </section>
  );
}