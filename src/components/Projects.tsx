"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Marcode.id — Production Web Infrastructure",
      tags: ["Next.js", "AI-Assisted Development", "Modern UI/UX", "DNS Governance"],
      summary: "Built and deployed a live commercial platform; utilized Claude as a development copilot for UI scaffolding, performance tuning, and DNS setup.",
      problem: "Agency needed a high-performance, visually striking digital storefront with sub-100ms TTI and strict SEO compliance.",
      solution: "Scaffolded a modern App Router Next.js architecture, optimized assets, and established a scalable DNS routing topology.",
      integration: "Leveraged Claude structured prompt workflows for rapid UI iteration, identifying performance bottlenecks, and writing deployment scripts.",
      image: "/images/Portfolioweb_marcode.png",
      link: "https://marcode.id"
    },
    {
      title: "Savanoir — Premium Digital Experience",
      tags: ["Web Development", "UI/UX Design", "Claude Assisted", "Branding"],
      summary: "Designed and developed a premium digital experience for Savanoir, focusing on striking visual aesthetics and immersive user engagement.",
      problem: "The brand required a highly atmospheric and visually captivating landing page to establish a strong online presence.",
      solution: "Implemented a moody, high-contrast design system with smooth scroll interactions and optimized media assets.",
      integration: "Utilized Claude prompt workflows for component refactoring, CSS animation tweaking, and frontend performance tuning.",
      image: "/images/sava.png",
      link: "https://savanoir.com"
    },
    {
      title: "Smart Museum+ — Interactive History Platform",
      tags: ["Interactive UI", "Prompt Engineering", "UX Research"],
      summary: "Built an interactive museum platform bringing history to users' hands with an intuitive, clean, and accessible interface.",
      problem: "Historical data and artifacts needed to be presented in a modern, engaging way for younger digital-native audiences.",
      solution: "Developed a clean layout with dynamic routing, ensuring seamless navigation across different historical eras and exhibits.",
      integration: "Designed custom prompt structures for artifact content categorization and contextual user session state logic.",
      image: "/images/smart01.jpeg",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-surface/30">
      <div className="w-full">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">Selected Systems</h2>
          <p className="text-muted text-lg max-w-2xl">
            A curated selection of architecture deployments, frontend developments, and process governance workflows.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative border border-surface-border bg-surface rounded-2xl overflow-hidden transition-all hover:border-accent/50 flex flex-col lg:flex-row"
            >
              {/* Image Column */}
              <div className="relative w-full lg:w-5/12 aspect-video lg:aspect-auto border-b lg:border-b-0 lg:border-r border-surface-border overflow-hidden bg-background">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Content Column */}
              <div className="flex flex-col p-8 lg:p-10 lg:w-7/12">
                <h3 className="text-2xl font-medium text-foreground mb-4 leading-snug group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-background text-muted rounded border border-surface-border">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-foreground/90 text-base leading-relaxed mb-6">
                  {project.summary}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-surface-border/50 mb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">Problem</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">Solution</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg p-4 border border-surface-border flex gap-3 items-start mt-auto mb-6">
                  <Code2 className="text-accent mt-0.5" size={18} />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">Development Focus</h4>
                    <p className="text-sm text-muted leading-relaxed">{project.integration}</p>
                  </div>
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors w-fit"
                >
                  <span>View Project</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
