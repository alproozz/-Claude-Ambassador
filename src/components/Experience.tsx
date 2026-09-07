"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Web Management & Sustainability Intern",
      company: "Directorate of Assets & Sustainability, Telkom University",
      period: "October 2025 – February 2026"
    },
    {
      role: "GRC Analyst Intern",
      company: "PT Media Telekomunikasi Mandiri",
      period: "September 2025 – December 2025"
    },
    {
      role: "MIS Intern",
      company: "PT Borneo Pasifik Global",
      period: "July 2025 – October 2025"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
