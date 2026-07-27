import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  // Lê a preferência salva apenas no cliente, após a hidratação
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = (next) => {
    setLangState(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
