"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "id";

const STORAGE_KEY = "portfolio-lang";

const LangContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore the saved choice after hydration (server markup is always EN,
  // so switching after mount avoids hydration mismatches).
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // Storage unavailable: keep the default language.
    }
    if (saved === "id") {
      const t = window.setTimeout(() => setLangState("id"), 0);
      return () => window.clearTimeout(t);
    }
  }, []);

  // Keep the document language attribute in sync for screen readers / SEO.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the choice just won't persist.
    }
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
