"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, PortfolioData, UIStrings } from "./types";
import { portfolioDataEN, uiEN } from "./en";
import { portfolioDataJA, uiJA } from "./ja";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  ui: UIStrings;
  portfolioData: PortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang") as Language;
    if (savedLang === "en" || savedLang === "ja") {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("portfolio_lang", newLang);
    } catch {
      // Ignore quota error if any
    }
  };

  const ui = lang === "ja" ? uiJA : uiEN;
  const portfolioData = lang === "ja" ? portfolioDataJA : portfolioDataEN;

  return (
    <LanguageContext.Provider value={{ lang, setLang, ui, portfolioData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if rendered outside provider during SSG/initial render
    return {
      lang: "en",
      setLang: () => {},
      ui: uiEN,
      portfolioData: portfolioDataEN,
    };
  }
  return context;
};
