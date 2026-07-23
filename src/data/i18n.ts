import type { L, SkillCategory } from "./content";

export const ui = {
  nav: {
    experience: { en: "Experience", de: "Erfahrung" } as L,
    skills: { en: "Skills", de: "Skills" } as L,
    projects: { en: "Projects", de: "Projekte" } as L,
    education: { en: "Education", de: "Ausbildung" } as L,
    contact: { en: "Contact", de: "Kontakt" } as L,
    resume: { en: "Resume", de: "Lebenslauf" } as L,
  },
  hero: {
    greeting: { en: "Hi, I'm —", de: "Hi, ich bin —" } as L,
    ctaSeeWork: { en: "See the work", de: "Zur Arbeit" } as L,
    ctaDownload: { en: "Download resume", de: "Lebenslauf herunterladen" } as L,
  },
  experience: {
    eyebrow: { en: "Track record", de: "Werdegang" } as L,
    title: { en: "Experience", de: "Erfahrung" } as L,
  },
  skills: {
    eyebrow: { en: "Toolbox", de: "Werkzeugkasten" } as L,
    title: { en: "Skills", de: "Skills" } as L,
    note: {
      en: "Not just a word cloud — every skill here traces back to a job, course, or project. Click one to find out where.",
      de: "Keine bloße Wortwolke — jeder Skill hier lässt sich auf einen Job, Kurs oder ein Projekt zurückführen. Klick drauf, um herauszufinden, wo.",
    } as L,
  },
  projects: {
    eyebrow: { en: "Side quests", de: "Nebenprojekte" } as L,
    title: { en: "Projects", de: "Projekte" } as L,
    note: {
      en: "A mix of things built for grades, for defense contractors, and for no reason other than curiosity.",
      de: "Eine Mischung aus Dingen, gebaut für Noten, für Verteidigungsunternehmen und aus reiner Neugier.",
    } as L,
    alsoLurking: { en: "Also lurking in the repos", de: "Lauert außerdem in den Repos" } as L,
    repoComingSoon: { en: "Repo link coming soon", de: "Repo-Link folgt in Kürze" } as L,
  },
  education: {
    eyebrow: { en: "Paper trail", de: "Werdegang auf Papier" } as L,
    title: { en: "Education", de: "Ausbildung" } as L,
    languagesLabel: { en: "Languages", de: "Sprachen" } as L,
  },
  interests: {
    eyebrow: { en: "Off the clock", de: "Nach Feierabend" } as L,
    title: { en: "Beyond the Terminal", de: "Abseits vom Terminal" } as L,
  },
  resumeSection: {
    heading: { en: "Want the PDF version?", de: "Lieber die PDF-Version?" } as L,
    subtext: {
      en: "Same story, boring format — one page, ATS-friendly, no typewriter animation.",
      de: "Gleiche Geschichte, langweiliges Format — eine Seite, ATS-freundlich, keine Schreibmaschinen-Animation.",
    } as L,
    button: { en: "Download resume", de: "Lebenslauf herunterladen" } as L,
  },
  contact: {
    eyebrow: { en: "Let's talk", de: "Lass uns reden" } as L,
    title: { en: "Get in touch", de: "Kontakt aufnehmen" } as L,
    note: {
      en: "Open to opportunities on both sides of the toggle — backend systems or automotive software. Or just say hi.",
      de: "Offen für Möglichkeiten auf beiden Seiten des Schalters — Backend-Systeme oder Automotive-Software. Oder sag einfach Hallo.",
    } as L,
    email: { en: "Email", de: "E-Mail" } as L,
    phone: { en: "Phone", de: "Telefon" } as L,
    copyDiscord: { en: "Click to copy", de: "Klicken zum Kopieren" } as L,
    copied: { en: "Copied!", de: "Kopiert!" } as L,
  },
  filterBar: {
    tracing: { en: "Tracing", de: "Verfolge" } as L,
    acrossThePage: { en: "across the page", de: "über die ganze Seite" } as L,
  },
  projectCard: {
    code: { en: "Code", de: "Code" } as L,
    live: { en: "Live", de: "Live" } as L,
  },
};

export const categoryLabels: Record<SkillCategory, L> = {
  Languages: { en: "Languages", de: "Sprachen" },
  Backend: { en: "Backend", de: "Backend" },
  Frontend: { en: "Frontend", de: "Frontend" },
  Testing: { en: "Testing", de: "Tests" },
  "Messaging & Data": { en: "Messaging & Data", de: "Messaging & Daten" },
  DevOps: { en: "DevOps", de: "DevOps" },
  Tools: { en: "Tools", de: "Werkzeuge" },
  "Embedded & Hardware": { en: "Automotive & Embedded", de: "Automotive & Embedded" },
  OS: { en: "OS", de: "Betriebssystem" },
};
