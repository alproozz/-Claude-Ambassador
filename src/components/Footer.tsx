import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-background pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        <div className="max-w-md">
          <p className="font-serif italic text-xl md:text-2xl text-foreground mb-4">
            Open for AI Governance, Software Systems, and Community Leadership.
          </p>
          <a href="mailto:contact@example.com" className="inline-block text-accent hover:text-accent-hover font-medium transition-colors border-b border-accent/30 hover:border-accent">
            Let's build something impactful.
          </a>
        </div>
        
        <div className="flex gap-4">
          <a 
            href="https://www.linkedin.com/in/priadana-setiawankusuma-1b732b38b/" 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-surface-border bg-surface flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 transition-all"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} strokeWidth={1.5} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-surface-border bg-surface flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 transition-all"
            aria-label="GitHub"
          >
            <FiGithub size={18} strokeWidth={1.5} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-surface-border bg-surface flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 transition-all"
            aria-label="X (Twitter)"
          >
            <FiTwitter size={18} strokeWidth={1.5} />
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="w-10 h-10 rounded-full border border-surface-border bg-surface flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 transition-all"
            aria-label="Email"
          >
            <FiMail size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
      
      <div className="w-full pt-8 border-t border-surface-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© 2026 M. Aulia Priadana Setiawankusuma.</p>
        <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  );
}
