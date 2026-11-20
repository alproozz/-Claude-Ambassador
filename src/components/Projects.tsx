"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ClipboardCheck, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ImageLightbox, { type LightboxImage } from "@/components/ImageLightbox";
import SectionHeading from "@/components/SectionHeading";
import { useLang } from "./LanguageProvider";

const projectMeta = [
  {
    image: "/images/diundangdigital.png",
    imageSize: { width: 1365, height: 654 },
    link: "https://diundangdigital.id" as string | null,
  },
  {
    image: "/images/Portfolioweb_marcode.png",
    imageSize: { width: 1350, height: 644 },
    link: "https://marcode.id" as string | null,
  },
  {
    image: "/images/sava.png",
    imageSize: { width: 789, height: 444 },
    link: "https://savanoir.com" as string | null,
  },
  {
    image: "/images/smart01.jpeg",
    imageSize: { width: 1342, height: 656 },
    link: null as string | null,
  },
];

const copy = {
  en: {
    heading: {
      kicker: "Selected Work",
      title: "Selected Systems",
      lede: "Systems and applications I have built, from requirements and design through to deployment.",
    },
    labels: {
      problem: "Problem",
      solution: "Solution",
      role: "My Role",
      viewLive: "View Live Site",
      viewImage: "View full image",
      academic: "Academic project — SRS & UML documentation available on request.",
    },
    projects: [
      {
        title: "diundangdigital.id — Digital Wedding Invitation Platform",
        tags: ["Web Platform", "Online Payments", "Admin Panel", "Role-Based Access"],
        summary: "A live digital wedding invitation service: couples pick a design, fill in their event details, and send every guest a personalized link via WhatsApp.",
        problem: "Couples needed an easy way to invite every guest personally and collect RSVPs and wishes in one place, without printing or manual follow-up.",
        solution: "A self-service flow with 13 designs across Culture, Immersive, and Elegant themes. Payment via virtual account, QRIS, e-wallet, or card activates the account and editor automatically.",
        role: "Worked in a small development team: turned business needs into features such as the admin panel for accounts and payments and the invitation templates, tested releases on a preview site before going live, and set up access control for customers and admins.",
      },
      {
        title: "Marcode.id — Production Web Platform",
        tags: ["Next.js", "Web Development", "Deployment & DNS", "SEO & Performance"],
        summary: "Built and deployed a live commercial platform, from translating client needs into features through to deployment and domain setup.",
        problem: "Agency needed a high-performance, visually striking digital storefront with sub-100ms TTI and strict SEO compliance.",
        solution: "Set up a modern Next.js architecture, optimized assets, and established a scalable DNS routing topology.",
        role: "Built the platform end to end: turned client requirements into features, handled deployment and DNS configuration, and tuned performance and SEO before go-live.",
      },
      {
        title: "Savanoir — Premium Brand Experience",
        tags: ["Web Development", "UI/UX Design", "Branding"],
        summary: "Designed and developed a premium brand website for Savanoir, translating its identity into a cohesive visual system and engaging user experience.",
        problem: "The brand required a highly atmospheric and visually captivating landing page to establish a strong online presence.",
        solution: "Implemented a moody, high-contrast design system with smooth scroll interactions and optimized media assets.",
        role: "Designed the visual system and built the site, keeping media optimized and the experience fast and consistent across devices.",
      },
      {
        title: "Smart Museum+ — Virtual History Platform",
        tags: ["Web Application", "Requirements (SRS)", "UML System Design", "Role-Based Access"],
        summary: "Software Engineering course project: a web-based virtual museum for exploring Indonesian history and culture through interactive exhibitions and artifact catalogs.",
        problem: "Historical data and artifacts needed to be presented in a modern, engaging way for younger digital-native audiences.",
        solution: "Defined functional and non-functional requirements, then designed clear navigation across eras and exhibits with multi-level role-based access.",
        role: "Developed the web application and produced its Software Requirements Specification (SRS) and UML diagrams (use case, class, activity), giving the team a structured blueprint for development and future scaling.",
      },
    ],
  },
  id: {
    heading: {
      kicker: "Karya Pilihan",
      title: "Sistem Pilihan",
      lede: "Sistem dan aplikasi yang saya bangun, dari analisis kebutuhan dan desain hingga deployment.",
    },
    labels: {
      problem: "Masalah",
      solution: "Solusi",
      role: "Peran Saya",
      viewLive: "Kunjungi Situs",
      viewImage: "Lihat gambar penuh",
      academic: "Proyek akademik — dokumentasi SRS & UML tersedia bila diminta.",
    },
    projects: [
      {
        title: "diundangdigital.id — Platform Undangan Pernikahan Digital",
        tags: ["Platform Web", "Pembayaran Online", "Panel Admin", "Akses Berbasis Peran"],
        summary: "Layanan undangan pernikahan digital yang sudah berjalan: pasangan memilih desain, mengisi detail acara, lalu mengirim tautan personal ke setiap tamu via WhatsApp.",
        problem: "Pasangan butuh cara mudah untuk mengundang setiap tamu secara personal dan mengumpulkan RSVP serta ucapan di satu tempat, tanpa cetak atau follow-up manual.",
        solution: "Alur swalayan dengan 13 desain bertema Culture, Immersive, dan Elegant. Pembayaran via virtual account, QRIS, e-wallet, atau kartu langsung mengaktifkan akun dan editor secara otomatis.",
        role: "Bekerja dalam tim pengembangan kecil: menerjemahkan kebutuhan bisnis menjadi fitur seperti panel admin untuk akun dan pembayaran serta template undangan, menguji rilis di situs preview sebelum tayang, dan menyiapkan kontrol akses untuk pelanggan dan admin.",
      },
      {
        title: "Marcode.id — Platform Web Produksi",
        tags: ["Next.js", "Pengembangan Web", "Deployment & DNS", "SEO & Performa"],
        summary: "Membangun dan men-deploy platform komersial yang sudah tayang, dari menerjemahkan kebutuhan klien menjadi fitur hingga deployment dan pengaturan domain.",
        problem: "Agensi membutuhkan etalase digital berperforma tinggi dan memikat secara visual, dengan TTI di bawah 100ms dan kepatuhan SEO yang ketat.",
        solution: "Menyiapkan arsitektur Next.js modern, mengoptimalkan aset, dan membangun topologi routing DNS yang skalabel.",
        role: "Membangun platform dari ujung ke ujung: menerjemahkan kebutuhan klien menjadi fitur, menangani deployment dan konfigurasi DNS, serta menyetel performa dan SEO sebelum go-live.",
      },
      {
        title: "Savanoir — Pengalaman Brand Premium",
        tags: ["Pengembangan Web", "Desain UI/UX", "Branding"],
        summary: "Merancang dan mengembangkan situs brand premium untuk Savanoir, menerjemahkan identitasnya menjadi sistem visual yang kohesif dan pengalaman pengguna yang menarik.",
        problem: "Brand membutuhkan landing page yang atmosferik dan memikat secara visual untuk membangun kehadiran online yang kuat.",
        solution: "Menerapkan sistem desain kontras tinggi bernuansa gelap dengan interaksi scroll yang halus dan aset media yang dioptimalkan.",
        role: "Merancang sistem visual dan membangun situsnya, menjaga media tetap optimal serta pengalaman tetap cepat dan konsisten di semua perangkat.",
      },
      {
        title: "Smart Museum+ — Platform Sejarah Virtual",
        tags: ["Aplikasi Web", "Kebutuhan (SRS)", "Desain Sistem UML", "Akses Berbasis Peran"],
        summary: "Proyek mata kuliah Rekayasa Perangkat Lunak: museum virtual berbasis web untuk menjelajahi sejarah dan budaya Indonesia melalui pameran interaktif dan katalog artefak.",
        problem: "Data sejarah dan artefak perlu disajikan secara modern dan menarik bagi audiens muda yang akrab dengan dunia digital.",
        solution: "Mendefinisikan kebutuhan fungsional dan non-fungsional, lalu merancang navigasi yang jelas antar era dan pameran dengan akses berbasis peran bertingkat.",
        role: "Mengembangkan aplikasi web beserta dokumen Software Requirements Specification (SRS) dan diagram UML (use case, class, activity), memberi tim cetak biru terstruktur untuk pengembangan dan skalabilitas ke depan.",
      },
    ],
  },
} as const;

export default function Projects() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const { lang } = useLang();
  const t = copy[lang];

  const projects = t.projects.map((p, i) => ({ ...p, ...projectMeta[i] }));

  const lightboxImages: LightboxImage[] = projects.map((p) => ({
    src: p.image,
    alt: p.title,
    width: p.imageSize.width,
    height: p.imageSize.height,
  }));

  return (
    <section id="projects" className="py-20 md:py-24 px-6 md:px-8 bg-surface/30">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          index="01"
          kicker={t.heading.kicker}
          title={t.heading.title}
          lede={t.heading.lede}
        />

        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative border border-surface-border bg-surface rounded-2xl overflow-hidden transition-all hover:border-accent/50 flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              {/* Image Column */}
              <button
                type="button"
                onClick={() => setActiveImage(idx)}
                aria-label={`${t.labels.viewImage}: ${project.title}`}
                className={`group/img relative block w-full lg:w-5/12 aspect-video lg:aspect-auto border-b lg:border-b-0 ${idx % 2 === 1 ? "lg:border-l" : "lg:border-r"} border-surface-border overflow-hidden bg-background cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span className="absolute inset-0 bg-background/0 group-hover/img:bg-background/30 transition-colors duration-300" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-surface/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-foreground/90 shadow-lg transition-opacity lg:opacity-0 group-hover/img:opacity-100 group-focus-visible/img:opacity-100">
                  <Maximize2 size={13} />
                  {t.labels.viewImage}
                </span>
              </button>

              {/* Content Column */}
              <div className="flex flex-col p-8 lg:p-10 lg:w-7/12">
                <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4 leading-snug">
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
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">{t.labels.problem}</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">{t.labels.solution}</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-4 border border-surface-border flex gap-3 items-start mt-auto mb-6">
                  <ClipboardCheck className="text-accent mt-0.5 shrink-0" size={18} />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">{t.labels.role}</h4>
                    <p className="text-sm text-muted leading-relaxed">{project.role}</p>
                  </div>
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors w-fit"
                  >
                    <span>{t.labels.viewLive}</span>
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="text-sm text-muted">
                    {t.labels.academic}
                  </span>
                )}
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
