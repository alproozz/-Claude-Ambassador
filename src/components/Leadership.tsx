"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Leadership() {
  const roles = [
    {
      title: "Team Mentor & Cohort Lead",
      organization: "YEC Camp HIPMI PT Telkom",
      description: "Guided a 14-member student cohort in ideation, problem validation, tech stack selection, and pitch delivery.",
      link: "https://www.instagram.com/hipmipt.univtelkom/",
      image: "/images/yec.jpeg"
    },
    {
      title: "Region 3 Ranger",
      organization: "Novo Club by ParagonCorp",
      description: "Mobilized youth development, digital skills training, and leadership across West Java university networks.",
      link: "https://www.paragon-innovation.com/",
      image: "/images/novo.jpeg"
    },
    {
      title: "Member, Application Security",
      organization: "Google Developer Groups (GDG)",
      description: "Performed SBOM-based analysis of mobile apps and CI/CD pipelines, and contributed to attack-surface mapping and threat assessment.",
      link: "https://gdgbandung.com/",
      image: "/images/gdgbdg.webp"
    },
    {
      title: "Active Member / Digistars",
      organization: "Digistar Club by Telkom Indonesia",
      description: "Active in digital talent programs focused on business analytics, data-driven insight, and sustainable B2B growth.",
      link: "https://digistartelkom.id/",
      image: "/images/digistar.png"
    }
  ];

  return (
    <section id="leadership" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">Community & Organizations</h2>
          <p className="text-muted text-lg max-w-2xl mb-6">
            Communities where I learn, contribute, and help peers across tech and business.
          </p>
          <div className="p-4 rounded-xl bg-surface border border-accent/30 text-sm text-foreground/90 max-w-3xl flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0"></span>
            <span><strong>Beyond Work:</strong> Mentoring student founders, contributing to application security research, and joining digital talent programs across Telkom University & West Java.</span>
          </div>
        </div>

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
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted group-hover:text-accent transition-colors mt-auto">
                  <span>Visit Community</span>
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
