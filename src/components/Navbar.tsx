"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "./LanguageProvider";

const copy = {
  en: {
    links: ["About", "Projects", "Community", "Experience", "Credentials"],
    resume: "Resume",
  },
  id: {
    links: ["Tentang", "Proyek", "Komunitas", "Pengalaman", "Sertifikasi"],
    resume: "CV",
  },
} as const;

const hrefs = ["#about", "#projects", "#leadership", "#experience", "#credentials"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLang();
  const t = copy[lang];

  const navLinks = t.links.map((name, i) => ({ name, href: hrefs[i] }));

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-surface-border bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Name / Monogram */}
        <Link
          href="/"
          aria-label="M. Aulia Priadana Setiawankusuma, home"
          className="flex items-center gap-3 group min-w-0"
        >
          <div className="w-8 h-8 shrink-0 rounded bg-surface border border-surface-border flex items-center justify-center group-hover:border-accent transition-colors">
            {/* Modular grid mark: structured blocks, one in the accent color */}
            <svg viewBox="0 0 16 16" className="w-4 h-4" aria-hidden="true">
              <rect x="1" y="1" width="6" height="6" rx="1.5" className="fill-foreground" />
              <rect x="9" y="1" width="6" height="6" rx="1.5" className="fill-foreground/35 transition-colors group-hover:fill-foreground/60" />
              <rect x="1" y="9" width="6" height="6" rx="1.5" className="fill-foreground/35 transition-colors group-hover:fill-foreground/60" />
              <rect x="9" y="9" width="6" height="6" rx="1.5" className="fill-accent" />
            </svg>
          </div>
          <span className="hidden sm:block font-serif text-lg font-medium tracking-wide truncate">
            Aulia Priadana
            <span className="hidden xl:inline"> Setiawankusuma</span>
          </span>
        </Link>

        {/* Center: Nav Links (desktop) */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://github.com/alproozz"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={19} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/priadana-setiawankusuma-1b732b38b/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={19} strokeWidth={1.5} />
          </a>
          <a
            href="/CV-Priadana-Setiawan.pdf"
            download="CV-Priadana-Setiawan.pdf"
            aria-label="Download resume (PDF)"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            <FileText size={16} />
            <span className="hidden sm:inline">{t.resume}</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden w-9 h-9 rounded-md border border-surface-border bg-surface flex items-center justify-center text-foreground"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden overflow-hidden border-t border-surface-border bg-background/95 backdrop-blur-md"
          >
            <div className="mx-auto w-full max-w-6xl px-6 py-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm font-medium text-muted hover:text-foreground transition-colors border-b border-surface-border/60 last:border-b-0"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-5 pt-4">
                <a
                  href="https://github.com/alproozz"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.linkedin.com/in/priadana-setiawankusuma-1b732b38b/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
