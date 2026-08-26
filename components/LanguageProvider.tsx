"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "es";

const LanguageContext = createContext({
  lang: "fr" as Lang,
  setLang: (_: Lang) => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}