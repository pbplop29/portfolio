import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Interests from "@/components/Interests";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Interests />
        <ResumeSection />
        <Contact />
      </main>
    </>
  );
}
