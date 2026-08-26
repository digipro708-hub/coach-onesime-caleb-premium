import Image from "next/image";
import { Phone, Mail, Facebook, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-card">

        <div className="footer-logo-wrapper">
          <Image
            src="/Logo.png"
            alt="Logo Académie Espacio de Lengua"
            width={90}
            height={90}
            className="footer-logo"
          />
        </div>

        <p className="footer-coach">Coach</p>

        <h2>Onésime Caleb</h2>

        <h3>Ayihadji KOUMAGNON</h3>

        <p className="footer-academy">
          Académie Espagnole • ESPACIO DE LENGUA
        </p>

        <blockquote>
          « Une langue, mille possibilités. »
        </blockquote>

        <div className="footer-contact">

          <a href="tel:+2290144686974">
            <Phone size={18}/>
            +229 01 44 68 69 74
          </a>

          <a href="mailto:okoum2018@gmail.com">
            <Mail size={18}/>
            okoum2018@gmail.com
          </a>

        </div>

        <div className="footer-socials">

          <a
            href="https://www.tiktok.com/@coachonesimecaleb"
            target="_blank"
          >
            <Music2 size={22}/>
          </a>

          <a
            href="https://www.facebook.com/share/1BsdE2wdWs/"
            target="_blank"
          >
            <Facebook size={22}/>
          </a>

        </div>

        <div className="footer-bottom">
          © 2026 Coach Onésime Caleb KOUMAGNON
          <br/>
          Carte digitale professionnelle
        </div>

      </div>
    </footer>
  );
}