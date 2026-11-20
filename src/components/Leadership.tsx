"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { useLang } from "./LanguageProvider";

const roleMeta = [
  {
    organization: "YEC Camp HIPMI PT Telkom",
    link: "https://www.instagram.com/hipmipt.univtelkom/",
    image: "/images/yec.jpeg",
  },
  {
    organization: "Novo Club by ParagonCorp",
    link: "https://www.paragon-innovation.com/",
    image: "/images/novo.jpeg",
  },
  {
    organization: "Google Developer Groups (GDG)",
    link: "https://gdgbandung.com/",
    image: "/images/gdgbdg.webp",
  },
  {
    organization: "Digistar Club by Telkom Indonesia",
    link: "https://digistartelkom.id/",
    image: "/images/digistar.png",
  },
];

const copy = {
  en: {
    heading: {
      kicker: "Beyond Work",
      title: "Community & Organizations",
      lede: "Mentoring student founders, contributing to application security research, and joining digital talent programs across Telkom University & West Java.",
    },
    visit: "Visit community",
    roles: [
      {
        title: "Team Mentor & Cohort Lead",
        description: "Guided a 14-member student cohort in ideation, problem validation, tech stack selection, and pitch delivery.",
      },
      {
        title: "Region 3 Ranger",
        description: "Mobilized youth development, digital skills training, and leadership across West Java university networks.",
      },
      {
        title: "Member, Application Security",
        description: "Performed SBOM-based analysis of mobile apps and CI/CD pipelines, and contributed to attack-surface mapping and threat assessment.",
      },
      {
        title: "Active Member / Digistars",
        description: "Active in digital talent programs focused on business analytics, data-driven insight, and sustainable B2B growth.",
      },
    ],
  },
  id: {
    heading: {
      kicker: "Di Luar Pekerjaan",
      title: "Komunitas & Organisasi",
      lede: "Membimbing founder mahasiswa, berkontribusi pada riset keamanan aplikasi, dan mengikuti program talenta digital di Telkom University & Jawa Barat.",
    },
    visit: "Kunjungi komunitas",
    roles: [
      {
        title: "Mentor Tim & Ketua Kohort",
        description: "Membimbing kohort 14 mahasiswa dalam ideasi, validasi masalah, pemilihan tech stack, dan penyampaian pitch.",
      },
      {
        title: "Region 3 Ranger",
        description: "Menggerakkan pengembangan pemuda, pelatihan keterampilan digital, dan kepemimpinan di jaringan universitas se-Jawa Barat.",
      },
      {
        title: "Anggota, Application Security",
        description: "Melakukan analisis berbasis SBOM pada aplikasi mobile dan pipeline CI/CD, serta berkontribusi pada pemetaan attack surface dan penilaian ancaman.",
      },
      {
        title: "Anggota Aktif / Digistars",
        description: "Aktif dalam program talenta digital yang berfokus pada analitik bisnis, insight berbasis data, dan pertumbuhan B2B berkelanjutan.",
      },
    ],
  },
} as const;

export default function Leadership() {
  const { lang } = useLang();
  const t = copy[lang];

  const roles = t.roles.map((r, i) => ({ ...r, ...roleMeta[i] }));

  return (
    <section id="leadership" className="py-20 md:py-24 px-6 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          index="03"
          kicker={t.heading.kicker}
          title={t.heading.title}
          lede={t.heading.lede}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, idx) => (
            <motion.a 
              key={idx}
              href={role.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-surface rounded-2xl border border-surface-border hover:border-accent/50 transition-colors flex flex-col h-full overflow-hidden"
            >
              <div className="relative w-full aspect-video bg-background border-b border-surface-border overflow-hidden">
                <Image 
                  src={role.image} 
                  alt={role.organization} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-medium text-foreground mb-1 group-hover:text-accent transition-colors">{role.title}</h3>
                <p className="text-sm font-medium text-accent mb-4">{role.organization}</p>
                <p className="text-sm text-muted leading-relaxed mt-auto mb-6">
                  {role.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted group-hover:text-accent transition-colors mt-auto">
                  <span>{t.visit}</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
