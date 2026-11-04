"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Community", href: "#leadership" },
    { name: "Experience", href: "#experience" },
    { name: "Credentials", href: "#credentials" },
  ];

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b border-surface-border bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        {/* Left: Name / Monogram */}
        <Link href="/" aria-label="M. Aulia Priadana Setiawankusuma, home" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-surface border border-surface-border flex items-center justify-center group-hover:border-accent transition-colors">
            {/* Modular grid mark: structured blocks, one in the accent color */}
            <svg viewBox="0 0 16 16" className="w-4 h-4" aria-hidden="true">
              <rect x="1" y="1" width="6" height="6" rx="1.5" className="fill-foreground" />
              <rect x="9" y="1" width="6" height="6" rx="1.5" className="fill-foreground/35 transition-colors group-hover:fill-foreground/60" />
              <rect x="1" y="9" width="6" height="6" rx="1.5" className="fill-foreground/35 transition-colors group-hover:fill-foreground/60" />
              <rect x="9" y="9" width="6" height="6" rx="1.5" className="fill-accent" />
            </svg>
          </div>
          <span className="font-serif italic text-lg hidden sm:block font-medium tracking-wide">
            M. Aulia Priadana Setiawankusuma
          </span>
        </Link>

        {/* Center: Nav Links */}
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
        <div className="flex items-center gap-4">
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
          <a
            href="/CV-Priadana-Setiawan.pdf"
            download="CV-Priadana-Setiawan.pdf"
            aria-label="Download resume (PDF)"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-3 sm:px-4 py-2 rounded text-sm font-medium transition-colors"
          >
            <FileText size={16} />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
