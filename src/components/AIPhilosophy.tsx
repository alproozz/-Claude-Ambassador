"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Code } from "lucide-react";

export default function AIPhilosophy() {
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
                <Sparkles size={14} />
                Anthropic & Claude Ecosystem Vision
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
                Why I Engineer with Anthropic Claude
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
                &quot;I rely on Anthropic Claude as my primary development copilot for its superior code reasoning, precise context window, and Constitutional AI alignment. I utilize Claude to accelerate UI scaffolding, architect clean Next.js systems, and optimize developer velocity across all my projects.&quot;
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-muted font-medium">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-accent" />
                  <span>Structured System Prompts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code size={14} className="text-accent" />
                  <span>Deterministic JSON Schemas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-accent" />
                  <span>Human-Aligned AI Workflows</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col items-start lg:items-end gap-3 border-t lg:border-t-0 lg:border-l border-surface-border pt-6 lg:pt-0 lg:pl-10">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">Ambassador Commitment</span>
              <p className="text-sm text-foreground/90 font-medium max-w-xs lg:text-right">
                Empowering student developers & campus startups at Telkom University to master Anthropic Claude workflows.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
