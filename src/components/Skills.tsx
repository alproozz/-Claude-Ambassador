"use client";

import { motion } from "framer-motion";
import { Code2, Database, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useLang } from "./LanguageProvider";

const copy = {
  en: {
    heading: {
      kicker: "Skills & Expertise",
      title: "Core Capabilities",
      lede: "Hands-on development skills, supported by experience in governance, data, and security.",
    },
    categories: [
      {
        title: "System & Application Development",
        skills: [
          "Web Apps (React, Next.js, Laravel)",
          "Mobile Apps (Flutter)",
          "Languages (Python, Java, PHP, C++)",
          "WordPress Administration & SEO",
          "Git & Preview-to-Live Deployments",
        ],
      },
      {
        title: "Governance, Risk & Compliance",
        skills: [
          "GRC & ISO Compliance Review",
          "Third-Party & Procurement Risk",
          "Access Control & Security Checks",
          "SOP & System Documentation",
          "Requirements Analysis (SRS, UML)",
        ],
      },
      {
        title: "Data & Security",
        skills: [
          "Data Analysis (Excel, Power BI)",
          "Machine Learning (Python, Google Colab)",
          "Security Testing (Burp Suite, OWASP ZAP)",
          "Network & Forensics (Wireshark, Kali Linux)",
          "Command Line (Linux, Windows)",
        ],
      },
    ],
  },
  id: {
    heading: {
      kicker: "Keahlian",
      title: "Kemampuan Inti",
      lede: "Keterampilan pengembangan langsung, didukung pengalaman di bidang tata kelola, data, dan keamanan.",
    },
    categories: [
      {
        title: "Pengembangan Sistem & Aplikasi",
        skills: [
          "Aplikasi Web (React, Next.js, Laravel)",
          "Aplikasi Mobile (Flutter)",
          "Bahasa Pemrograman (Python, Java, PHP, C++)",
          "Administrasi WordPress & SEO",
          "Git & Deployment Preview-ke-Live",
        ],
      },
      {
        title: "Tata Kelola, Risiko & Kepatuhan",
        skills: [
          "Review Kepatuhan GRC & ISO",
          "Risiko Pihak Ketiga & Pengadaan",
          "Kontrol Akses & Pemeriksaan Keamanan",
          "SOP & Dokumentasi Sistem",
          "Analisis Kebutuhan (SRS, UML)",
        ],
      },
      {
        title: "Data & Keamanan",
        skills: [
          "Analisis Data (Excel, Power BI)",
          "Machine Learning (Python, Google Colab)",
          "Pengujian Keamanan (Burp Suite, OWASP ZAP)",
          "Jaringan & Forensik (Wireshark, Kali Linux)",
          "Command Line (Linux, Windows)",
        ],
      },
    ],
  },
} as const;

const categoryIcons = [Code2, ShieldCheck, Database];

export default function Skills() {
  const { lang } = useLang();
  const t = copy[lang];

  const skillCategories = t.categories.map((cat, i) => ({ ...cat, icon: categoryIcons[i] }));

  return (
    <section id="capabilities" className="py-20 md:py-24 px-6 md:px-8 bg-surface/50 border-y border-surface-border">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          index="02"
          kicker={t.heading.kicker}
          title={t.heading.title}
          lede={t.heading.lede}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-surface border border-surface-border p-8 rounded-2xl flex flex-col justify-between hover:border-accent/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-background border border-surface-border flex items-center justify-center text-accent mb-6">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-6 font-serif">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/70"></span>
                        <span className="text-foreground/90 font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
