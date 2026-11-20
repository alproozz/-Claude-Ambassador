"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useLang } from "./LanguageProvider";

const companies = [
  "PWG",
  "Directorate of Assets & Sustainability (PUTI), Telkom University",
  "PT Media Telekomunikasi Mandiri",
  "PT Borneo Pasifik Global (Mining Head Office)",
];

const copy = {
  en: {
    heading: {
      kicker: "Track Record",
      title: "Professional Experience",
      lede: "Four roles across development, governance, and information systems in 2025–2026.",
    },
    experiences: [
      {
        role: "IT Infrastructure & Risk Engineer",
        period: "July 2025 – October 2026",
        highlights: [
          "Translated business needs into features, including an admin panel for accounts and payments plus 20 invitation templates, backed by documented design standards and role-based access control.",
          "Worked within a small development team to combine each member's work into regular releases, tested on a preview site before going live.",
        ],
      },
      {
        role: "Website Management & Sustainability Intern",
        period: "October 2025 – February 2026",
        highlights: [
          "Authored SOPs for platform operations covering logging, updates, security checks, and maintenance records.",
          "Ran performance and security audits, backups, and plugin reviews on the WordPress platform, and aligned sustainability content with Green Campus standards.",
        ],
      },
      {
        role: "GRC Analyst Intern",
        period: "September 2025 – December 2025",
        highlights: [
          "Evaluated GRC and ISO compliance, identified gaps, and drove mitigation actions.",
          "Reviewed third-party risk and procurement, and embedded IT governance into the project lifecycle to align delivery with business and regulatory needs.",
        ],
      },
      {
        role: "Management Information Systems Intern",
        period: "July 2025 – October 2025",
        highlights: [
          "Streamlined the end-to-end PBJ-GI approval workflow and drafted business blueprint documents (organization, systems, ERP procedures) for audit readiness.",
          "Validated logistics and master data using Power BI, Excel, and ML-based anomaly detection to enforce SOP compliance, and trained users on the system.",
        ],
      },
    ],
  },
  id: {
    heading: {
      kicker: "Rekam Jejak",
      title: "Pengalaman Profesional",
      lede: "Empat peran di bidang pengembangan, tata kelola, dan sistem informasi selama 2025–2026.",
    },
    experiences: [
      {
        role: "IT Infrastructure & Risk Engineer",
        period: "Juli 2025 – Oktober 2026",
        highlights: [
          "Menerjemahkan kebutuhan bisnis menjadi fitur, termasuk panel admin untuk akun dan pembayaran serta 20 template undangan, didukung standar desain terdokumentasi dan kontrol akses berbasis peran.",
          "Bekerja dalam tim pengembangan kecil untuk menggabungkan pekerjaan tiap anggota menjadi rilis berkala, diuji di situs preview sebelum tayang.",
        ],
      },
      {
        role: "Website Management & Sustainability Intern",
        period: "Oktober 2025 – Februari 2026",
        highlights: [
          "Menyusun SOP operasional platform yang mencakup logging, pembaruan, pemeriksaan keamanan, dan catatan pemeliharaan.",
          "Menjalankan audit performa dan keamanan, backup, serta review plugin pada platform WordPress, dan menyelaraskan konten keberlanjutan dengan standar Green Campus.",
        ],
      },
      {
        role: "GRC Analyst Intern",
        period: "September 2025 – Desember 2025",
        highlights: [
          "Mengevaluasi kepatuhan GRC dan ISO, mengidentifikasi gap, dan mendorong aksi mitigasi.",
          "Meninjau risiko pihak ketiga dan pengadaan, serta menanamkan tata kelola TI ke dalam siklus proyek agar selaras dengan kebutuhan bisnis dan regulasi.",
        ],
      },
      {
        role: "Management Information Systems Intern",
        period: "Juli 2025 – Oktober 2025",
        highlights: [
          "Merampingkan alur persetujuan PBJ-GI dari ujung ke ujung dan menyusun dokumen business blueprint (organisasi, sistem, prosedur ERP) untuk kesiapan audit.",
          "Memvalidasi data logistik dan master data menggunakan Power BI, Excel, dan deteksi anomali berbasis ML untuk menegakkan kepatuhan SOP, serta melatih pengguna sistem.",
        ],
      },
    ],
  },
} as const;

export default function Experience() {
  const { lang } = useLang();
  const t = copy[lang];

  const experiences = t.experiences.map((e, i) => ({ ...e, company: companies[i] }));

  return (
    <section id="experience" className="py-20 md:py-24 px-6 md:px-8 bg-surface/30">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          index="04"
          kicker={t.heading.kicker}
          title={t.heading.title}
          lede={t.heading.lede}
        />

        <div className="relative">
          {/* Timeline rail */}
          <span className="absolute left-[5px] top-2 bottom-2 w-px bg-surface-border" aria-hidden />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-10 pb-12 last:pb-0"
            >
              <span className="absolute left-0 top-2 w-[11px] h-[11px] rounded-full bg-accent ring-4 ring-background" aria-hidden />

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 mb-1.5">
                <h3 className="text-lg md:text-xl font-medium text-foreground">{exp.role}</h3>
                <span className="text-sm text-muted shrink-0 font-mono">{exp.period}</span>
              </div>
              <div className="flex items-center gap-2 text-accent mb-4">
                <Briefcase size={15} />
                <span className="font-medium text-sm">{exp.company}</span>
              </div>
              <ul className="space-y-2 max-w-3xl">
                {exp.highlights.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mt-2 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
