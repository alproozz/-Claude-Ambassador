"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import PixelRevealImage from "./PixelRevealImage";
import { useLang } from "./LanguageProvider";

const copy = {
  en: {
    badge: "Informatics Graduate @ Telkom University",
    headline1: "Engineering Structured Systems.",
    headline2: "Aligning Technology with Business.",
    sub: "Informatics graduate who builds and maintains systems and applications, from web platforms and admin panels to data workflows. Along the way I have gained hands-on experience in GRC, ISO compliance, and information systems, so what I build stays well-documented, secure, and reliable.",
    ctaProjects: "View Projects",
    metrics: [
      { value: "4", label: "Roles across Development, GRC & MIS (2025–2026)" },
      { value: "20+", label: "Invitation templates & admin panel shipped at PWG" },
      { value: "3.6", label: "GPA — Informatics, Telkom University" },
    ],
  },
  id: {
    badge: "Lulusan Informatika @ Telkom University",
    headline1: "Merancang Sistem yang Terstruktur.",
    headline2: "Menyelaraskan Teknologi dengan Bisnis.",
    sub: "Lulusan Informatika yang membangun dan memelihara sistem serta aplikasi, dari platform web dan panel admin hingga alur kerja data. Di sepanjang prosesnya saya memperoleh pengalaman langsung di bidang GRC, kepatuhan ISO, dan sistem informasi, sehingga apa yang saya bangun tetap terdokumentasi dengan baik, aman, dan andal.",
    ctaProjects: "Lihat Proyek",
    metrics: [
      { value: "4", label: "Peran di bidang Development, GRC & MIS (2025–2026)" },
      { value: "20+", label: "Template undangan & panel admin dirilis di PWG" },
      { value: "3.6", label: "IPK — Informatika, Telkom University" },
    ],
  },
} as const;

export default function Hero() {
  const { lang } = useLang();
  const t = copy[lang];
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const metrics = t.metrics;

  return (
    <section id="about" className="pt-20 pb-16 md:pt-32 md:pb-24 px-6 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Left Column */}
          <div className="flex-1 flex flex-col items-start">
            {/* Eyebrow Badge */}
            <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-border bg-surface text-xs font-medium text-muted">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              {t.badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-foreground leading-[1.1] mb-6"
            >
              {t.headline1}<br />
              <span className="italic text-muted">{t.headline2}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className="text-base md:text-xl text-muted max-w-2xl mb-8 leading-relaxed"
            >
              {t.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                {t.ctaProjects}
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://www.linkedin.com/in/priadana-setiawankusuma-1b732b38b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-surface border border-surface-border text-foreground px-6 py-3 rounded-md font-medium transition-colors"
              >
                LinkedIn
                <ExternalLink size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <motion.div variants={item} className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs md:max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-surface-border shadow-2xl shadow-black/40 group">
              <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/0 transition-colors z-10 duration-500"></div>
              <PixelRevealImage
                src="/images/Foto_M.Aulia Priadana.png"
                alt="M. Aulia Priadana Setiawankusuma"
                imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
                preload
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Social Proof Metrics (Full Width Below) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full mt-16 md:mt-24 border-t border-surface-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 py-8 md:py-10 md:px-8 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 last:border-b-0 border-surface-border md:border-l first:md:border-l-0 md:border-surface-border"
              >
                <span className="text-4xl md:text-5xl font-serif text-foreground">{metric.value}</span>
                <span className="text-sm text-muted leading-relaxed">{metric.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
