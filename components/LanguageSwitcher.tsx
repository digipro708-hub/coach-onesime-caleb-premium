"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={lang === "fr" ? "active" : ""}
        onClick={() => setLang("fr")}
      >
        🇫🇷 FR
      </button>

      <button
        className={lang === "es" ? "active" : ""}
        onClick={() => setLang("es")}
      >
        🇪🇸 ES
      </button>
    </div>
  );
}