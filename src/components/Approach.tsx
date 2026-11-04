"use client";

import { motion } from "framer-motion";
import { Compass, FileText, ShieldCheck, Workflow } from "lucide-react";

export default function Approach() {
  const pillars = [
    { icon: FileText, label: "Clear Requirements & Documentation" },
    { icon: ShieldCheck, label: "Secure & Compliant by Default" },
    { icon: Workflow, label: "Tested, Reliable Releases" },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="w-full">
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
                How I Work
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
                Build It Right, Keep It Running
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
                I build systems and applications, and I care just as much about what keeps them reliable after launch: clear requirements, documented standards, secure access, and releases that are tested before they go live. That habit comes from working in both development and GRC roles.
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
              <span className="text-xs font-bold uppercase tracking-wider text-muted">Currently</span>
              <p className="text-sm text-foreground/90 font-medium max-w-xs lg:text-right">
                Fresh Informatics graduate, ready to contribute to teams that build and run real-world systems, and keep learning along the way.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
