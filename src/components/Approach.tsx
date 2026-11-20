"use client";

import { motion } from "framer-motion";
import { Compass, FileText, ShieldCheck, Workflow } from "lucide-react";
import { useLang } from "./LanguageProvider";

const copy = {
  en: {
    kicker: "How I Work",
    title: "Build It Right, Keep It Running",
    body: "I build systems and applications, and I care just as much about what keeps them reliable after launch: clear requirements, documented standards, secure access, and releases that are tested before they go live. That habit comes from working in both development and GRC roles.",
    pillars: [
      "Clear Requirements & Documentation",
      "Secure & Compliant by Default",
      "Tested, Reliable Releases",
    ],
    currently: "Currently",
    currentText: "Fresh Informatics graduate, ready to contribute to teams that build and run real-world systems, and keep learning along the way.",
  },
  id: {
    kicker: "Cara Saya Bekerja",
    title: "Bangun dengan Benar, Jaga Tetap Berjalan",
    body: "Saya membangun sistem dan aplikasi, dan sama pedulinya pada hal-hal yang menjaganya tetap andal setelah diluncurkan: kebutuhan yang jelas, standar yang terdokumentasi, akses yang aman, dan rilis yang diuji sebelum tayang. Kebiasaan itu terbentuk dari pengalaman di peran development sekaligus GRC.",
    pillars: [
      "Kebutuhan & Dokumentasi yang Jelas",
      "Aman & Patuh sejak Awal",
      "Rilis Teruji & Andal",
    ],
    currently: "Saat Ini",
    currentText: "Fresh graduate Informatika, siap berkontribusi di tim yang membangun dan mengoperasikan sistem nyata, sambil terus belajar.",
  },
} as const;

const pillarIcons = [FileText, ShieldCheck, Workflow];

export default function Approach() {
  const { lang } = useLang();
  const t = copy[lang];

  const pillars = t.pillars.map((label, i) => ({ icon: pillarIcons[i], label }));

  return (
    <section className="py-16 px-6 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-surface to-background border border-accent/30 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl"
        >
          {/* Subtle Glow background */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/40 bg-accent/10 text-xs font-medium text-accent mb-4">
                <Compass size={14} />
                {t.kicker}
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
                {t.title}
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
                {t.body}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-muted font-medium">
                {pillars.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon size={14} className="text-accent" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col items-start lg:items-end gap-3 border-t lg:border-t-0 lg:border-l border-surface-border pt-6 lg:pt-0 lg:pl-10">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">{t.currently}</span>
              <p className="text-sm text-foreground/90 font-medium max-w-xs lg:text-right">
                {t.currentText}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
