"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useLang } from "./LanguageProvider";

const copy = {
  en: {
    quote: "Open to opportunities in system & application development, information systems, and IT governance.",
    built: "Built with Next.js, Tailwind CSS & Framer Motion.",
  },
  id: {
    quote: "Terbuka untuk peluang di bidang pengembangan sistem & aplikasi, sistem informasi, dan tata kelola TI.",
    built: "Dibangun dengan Next.js, Tailwind CSS & Framer Motion.",
  },
} as const;

export default function Footer() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <footer className="border-t border-surface-border bg-background pt-16 pb-8 px-6 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="max-w-md">
            <p className="font-serif italic text-xl md:text-2xl text-foreground mb-4">
              {t.quote}
            </p>
            <a
              href="mailto:priadanasetiawan@gmail.com"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
            >
              <FiMail size={16} />
              priadanasetiawan@gmail.com
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/priadana-setiawankusuma-1b732b38b/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-surface-border bg-surface flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/alproozz"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-surface-border bg-surface flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 transition-all"
              aria-label="GitHub"
            >
              <FiGithub size={18} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:priadanasetiawan@gmail.com"
              className="w-10 h-10 rounded-full border border-surface-border bg-surface flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 transition-all"
              aria-label="Email"
            >
              <FiMail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>© 2026 M. Aulia Priadana Setiawankusuma.</p>
          <p>{t.built}</p>
        </div>
      </div>
    </footer>
  );
}
