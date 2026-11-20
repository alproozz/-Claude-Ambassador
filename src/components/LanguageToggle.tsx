"use client";

import { Languages } from "lucide-react";
import { useLang } from "./LanguageProvider";

/**
 * Floating language switch that follows the page while scrolling,
 * so visitors who prefer Bahasa Indonesia always see the option.
 */
export default function LanguageToggle() {
  const { lang, setLang } = useLang();
  const toEnglish = lang === "id";

  return (
    <button
      type="button"
      onClick={() => setLang(toEnglish ? "en" : "id")}
      aria-label={toEnglish ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface/95 backdrop-blur-md pl-3 pr-4 py-2.5 text-sm font-medium text-foreground shadow-xl shadow-black/30 hover:border-accent transition-colors"
    >
      <span className="relative flex items-center justify-center" aria-hidden>
        <Languages size={16} className="text-accent" />
        {!toEnglish && (
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent animate-pulse" />
        )}
      </span>
      {toEnglish ? "English version" : "Versi Bahasa Indonesia"}
    </button>
  );
}
