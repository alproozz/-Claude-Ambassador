import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AIPhilosophy from "@/components/AIPhilosophy";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <Projects />
        <AIPhilosophy />
        <Skills />
        <Leadership />
        <Experience />
        <Credentials />
      </div>
      <Footer />
    </main>
  );
}
