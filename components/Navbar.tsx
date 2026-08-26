import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const links = [
    { name: "Accueil", href: "#hero" },
    { name: "Académie", href: "#academy" },
    { name: "Contact", href: "#contact" },
    { name: "Réseaux", href: "#social" },
    { name: "Adresse", href: "#location" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo + Nom */}
        <div className="navbar-logo">
          <Image
            src="/Logo.png"
            alt="Logo Académie Espacio de Lengua"
            width={52}
            height={52}
            priority
          />

          <div className="navbar-logo">ESPACIO DE LENGUA</div>

        <div className="navbar-right">
          <nav className="navbar-links">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}