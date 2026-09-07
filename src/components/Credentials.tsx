"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";

export default function Credentials() {
  const credentials = [
    {
      title: "Strategic Decision-Making: Lead Yourself & Navigate Career Growth",
      issuer: "My Digital Academy",
      date: "Issued Nov 2025",
      credentialId: "WS/MDA/151125/00578",
      link: "https://www.linkedin.com/in/priadana-setiawankusuma-1b732b38b/overlay/Certifications/1097478620/treasury/?profileId=ACoAAF_6gVsB0T9Mv6FYmzL6r-ZGQ8b09S5kYMw"
    },
    {
      title: "Digistar Connect Goes To Telkom University: How Business Analysts Create Insight from Data",
      issuer: "Digistar Club by Telkom Indonesia",
      date: "Issued Mar 2026",
      credentialId: "109/CC-TELU/DIGICLUB/III/2026",
      link: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fdrive%2Egoogle%2Ecom%2Fdrive%2Ffolders%2F1ZX3Q6tkI3XaOe5rnsOhdyMhKhVp6bxwU&urlhash=yD4T&mt=0GLe2zDzH1UCEcupuBC0XN9Xl_KN4joVhCdK2ovz_gwx9QOBnV6pCKuQ7rdRYHcUBkPiU5CbSWkcToYRoTkrCuX5BCK6&isSdui=true"
    },
    {
      title: "Digicourse: Cash Flow & Glow: Building Sustainable B2B Growth",
      issuer: "Digistar Club by Telkom Indonesia",
      date: "Issued Sep 2025",
      credentialId: "325/SC-DB/DigiClub/IX/2025",
      link: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fdrive%2Egoogle%2Ecom%2Ffile%2Fd%2F1IN5-ZjqPzju8Gd-1WGIkOK7ji3UsVYlQ%2Fview%3Fusp%3Ddrive_link&urlhash=Porv&mt=gHsa-xJNGAXgS8oT0QReg02J2HdepMdNW0PDhDYfCpsDgrGQC87n_yUk4bqKD-LLbQVlVccUpzSW6K3q__HRm8omGTEd&isSdui=true"
    },
    {
      title: "Committee of Workshop on Introduction to Artificial Intelligence and Cybercrime",
      issuer: "Telkom University",
      date: "Issued Jul 2025",
      credentialId: "2542/ABD08/PPM-JPM/2025",
      link: "https://www.linkedin.com/in/priadana-setiawankusuma-1b732b38b/overlay/Certifications/1726442445/treasury/?profileId=ACoAAF_6gVsB0T9Mv6FYmzL6r-ZGQ8b09S5kYMw"
    },
    {
      title: "AI Basics Fundamental",
      issuer: "Dicoding Indonesia",
      date: "Issued Jan 2026 · Expires Jan 2029",
      credentialId: "72ZDK4Y7LPYW",
      link: "https://www.linkedin.com/safety/go/?url=dicoding%2Ecom%2Fcertificates%2F72ZDK4Y7LPYW&urlhash=4OvX&mt=UfEs6VpY6hjGSCLQxt80dxKs5sMgKBqKMyJAqa4jp5Y5YRqNZI6r4QZblU_8J4ndG66KmCHSB40_YqBbjxDBseQfhvPu&isSdui=true"
    },
    {
      title: "Cloud Fundamentals and Gen AI on AWS",
      issuer: "Dicoding Indonesia",
      date: "Issued Jan 2025 · Expires Jan 2029",
      credentialId: "98XWOD2RLZM",
      link: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww%2Edicoding%2Ecom%2Fcertificates%2F98XWOD2RLZM3&urlhash=buwx&mt=MJE2EtYDtSlnGFhSuA0IDTJ4Qv7ME7GPz4yDb-V8tVfPhRLzkzOG8Brhfd3OuCro_zcvJCxgcumZX86RvS3qXeAL8TwZ&isSdui=true"
    }
  ];

  return (
    <section id="credentials" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">Licenses & Certifications</h2>
            <p className="text-muted text-lg max-w-2xl">
              Continuous learning and professional validation in Business Analytics, Event Management, and Cloud AI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex flex-col justify-between bg-surface p-6 rounded-xl border border-surface-border hover:border-accent/50 transition-all h-full"
            >
              <div>
                <Award className="text-accent mb-4" size={24} />
                <h3 className="text-lg font-medium text-foreground mb-1 leading-snug">
                  {cred.title}
                </h3>
                <p className="text-sm font-medium text-accent mb-2">
                  {cred.issuer}
                </p>
                <div className="text-xs text-muted mb-4 space-y-1">
                  <p>{cred.date}</p>
                  <p className="font-mono text-muted/70">Credential ID {cred.credentialId}</p>
                </div>
              </div>
              <a 
                href={cred.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-accent transition-colors mt-auto w-fit pt-4"
              >
                <span>Show credential</span>
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
