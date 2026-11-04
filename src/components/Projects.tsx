"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ClipboardCheck, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ImageLightbox, { type LightboxImage } from "@/components/ImageLightbox";

export default function Projects() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const projects = [
    {
      title: "diundangdigital.id — Digital Wedding Invitation Platform",
      tags: ["Web Platform", "Online Payments", "Admin Panel", "Role-Based Access"],
      summary: "A live digital wedding invitation service: couples pick a design, fill in their event details, and send every guest a personalized link via WhatsApp.",
      problem: "Couples needed an easy way to invite every guest personally and collect RSVPs and wishes in one place, without printing or manual follow-up.",
      solution: "A self-service flow with 13 designs across Culture, Immersive, and Elegant themes. Payment via virtual account, QRIS, e-wallet, or card activates the account and editor automatically.",
      role: "Worked in a small development team: turned business needs into features such as the admin panel for accounts and payments and the invitation templates, tested releases on a preview site before going live, and set up access control for customers and admins.",
      image: "/images/diundangdigital.png",
      imageSize: { width: 1365, height: 654 },
      link: "https://diundangdigital.id"
    },
    {
      title: "Marcode.id — Production Web Platform",
      tags: ["Next.js", "Web Development", "Deployment & DNS", "SEO & Performance"],
      summary: "Built and deployed a live commercial platform, from translating client needs into features through to deployment and domain setup.",
      problem: "Agency needed a high-performance, visually striking digital storefront with sub-100ms TTI and strict SEO compliance.",
      solution: "Set up a modern Next.js architecture, optimized assets, and established a scalable DNS routing topology.",
      role: "Built the platform end to end: turned client requirements into features, handled deployment and DNS configuration, and tuned performance and SEO before go-live.",
      image: "/images/Portfolioweb_marcode.png",
      imageSize: { width: 1350, height: 644 },
      link: "https://marcode.id"
    },
    {
      title: "Savanoir — Premium Brand Experience",
      tags: ["Web Development", "UI/UX Design", "Branding"],
      summary: "Designed and developed a premium brand website for Savanoir, translating its identity into a cohesive visual system and engaging user experience.",
      problem: "The brand required a highly atmospheric and visually captivating landing page to establish a strong online presence.",
      solution: "Implemented a moody, high-contrast design system with smooth scroll interactions and optimized media assets.",
      role: "Designed the visual system and built the site, keeping media optimized and the experience fast and consistent across devices.",
      image: "/images/sava.png",
      imageSize: { width: 789, height: 444 },
      link: "https://savanoir.com"
    },
    {
      title: "Smart Museum+ — Virtual History Platform",
      tags: ["Web Application", "Requirements (SRS)", "UML System Design", "Role-Based Access"],
      summary: "Software Engineering course project: a web-based virtual museum for exploring Indonesian history and culture through interactive exhibitions and artifact catalogs.",
      problem: "Historical data and artifacts needed to be presented in a modern, engaging way for younger digital-native audiences.",
      solution: "Defined functional and non-functional requirements, then designed clear navigation across eras and exhibits with multi-level role-based access.",
      role: "Developed the web application and produced its Software Requirements Specification (SRS) and UML diagrams (use case, class, activity), giving the team a structured blueprint for development and future scaling.",
      image: "/images/smart01.jpeg",
      imageSize: { width: 1342, height: 656 },
      link: "#"
    }
  ];

  const lightboxImages: LightboxImage[] = projects.map((p) => ({
    src: p.image,
    alt: p.title,
    width: p.imageSize.width,
    height: p.imageSize.height,
  }));

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-surface/30">
      <div className="w-full">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">Selected Systems</h2>
          <p className="text-muted text-lg max-w-2xl">
            Systems and applications I have built, from requirements and design through to deployment.
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
              <button
                type="button"
                onClick={() => setActiveImage(idx)}
                aria-label={`View full image: ${project.title}`}
                className="group/img relative block w-full lg:w-5/12 aspect-video lg:aspect-auto border-b lg:border-b-0 lg:border-r border-surface-border overflow-hidden bg-background cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span className="absolute inset-0 bg-background/0 group-hover/img:bg-background/30 transition-colors duration-300" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-surface/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-foreground/90 shadow-lg transition-colors group-hover/img:border-accent/60 group-hover/img:text-foreground">
                  <Maximize2 size={13} />
                  View full image
                </span>
              </button>
              
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
                  <ClipboardCheck className="text-accent mt-0.5 shrink-0" size={18} />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">My Role</h4>
                    <p className="text-sm text-muted leading-relaxed">{project.role}</p>
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

      <ImageLightbox
        images={lightboxImages}
        index={activeImage}
        onClose={() => setActiveImage(null)}
        onIndexChange={setActiveImage}
      />
    </section>
  );
}
