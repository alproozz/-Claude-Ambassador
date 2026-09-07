"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, ShieldCheck, Sparkles } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Sparkles,
      title: "Prompt Engineering & AI Workflows",
      skills: [
        "Claude System Prompting",
        "AI-Assisted UI Scaffolding",
        "Structured Context Framing",
        "Code Refactoring with LLMs",
        "Human-in-the-Loop Workflows"
      ]
    },
    {
      icon: Terminal,
      title: "Frontend & Web Architecture",
      skills: [
        "Next.js (App Router)",
        "React & TypeScript",
        "Tailwind CSS v4",
        "Framer Motion",
        "REST API & State Management"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Leadership & Governance",
      skills: [
        "Cohort Mentorship & Enablement",
        "IT Governance & GRC Frameworks",
        "Event & Community Management",
        "Product Roadmap & Agile Planning",
        "Strategic Decision-Making"
      ]
    }
  ];

  return (
    <section id="capabilities" className="py-20 px-6 md:px-12 lg:px-24 bg-surface/50 border-y border-surface-border">
      <div className="w-full">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-xs font-medium text-accent mb-4">
            <Cpu size={14} />
            Technical Stack & Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">Core Capabilities</h2>
          <p className="text-muted text-lg max-w-2xl">
            A structured breakdown of AI prompting engineering, production web architecture, and community leadership capabilities.
          </p>
        </div>

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
