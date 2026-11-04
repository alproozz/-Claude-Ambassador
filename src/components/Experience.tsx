"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "IT Infrastructure & Risk Engineer",
      company: "PWG",
      period: "July 2025 – October 2026",
      highlights: [
        "Translated business needs into features, including an admin panel for accounts and payments plus 20 invitation templates, backed by documented design standards and role-based access control.",
        "Worked within a small development team to combine each member's work into regular releases, tested on a preview site before going live."
      ]
    },
    {
      role: "Website Management & Sustainability Intern",
      company: "Directorate of Assets & Sustainability (PUTI), Telkom University",
      period: "October 2025 – February 2026",
      highlights: [
        "Authored SOPs for platform operations covering logging, updates, security checks, and maintenance records.",
        "Ran performance and security audits, backups, and plugin reviews on the WordPress platform, and aligned sustainability content with Green Campus standards."
      ]
    },
    {
      role: "GRC Analyst Intern",
      company: "PT Media Telekomunikasi Mandiri",
      period: "September 2025 – December 2025",
      highlights: [
        "Evaluated GRC and ISO compliance, identified gaps, and drove mitigation actions.",
        "Reviewed third-party risk and procurement, and embedded IT governance into the project lifecycle to align delivery with business and regulatory needs."
      ]
    },
    {
      role: "Management Information Systems Intern",
      company: "PT Borneo Pasifik Global (Mining Head Office)",
      period: "July 2025 – October 2025",
      highlights: [
        "Streamlined the end-to-end PBJ-GI approval workflow and drafted business blueprint documents (organization, systems, ERP procedures) for audit readiness.",
        "Validated logistics and master data using Power BI, Excel, and ML-based anomaly detection to enforce SOP compliance, and trained users on the system."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-surface/30">
      <div className="w-full">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">Professional Experience</h2>
        </div>

        <div className="relative border-l border-surface-border ml-3 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-10 ml-8 relative"
            >
              <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-background border border-surface-border flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-xl font-medium text-foreground">{exp.role}</h3>
                <span className="text-sm font-medium text-muted shrink-0 bg-surface px-3 py-1 rounded-full border border-surface-border inline-block w-fit">
                  {exp.period}
                </span>
              </div>
              <div className="flex items-center gap-2 text-accent mb-3">
                <Briefcase size={16} />
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
