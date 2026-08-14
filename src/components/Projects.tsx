"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ActiveFilterBar from "./ActiveFilterBar";
import { projects, personalProjects } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/i18n";

export default function Projects() {
  const { persona } = usePersona();
  const { lang } = useLanguage();

  const ordered = useMemo(() => {
    return [...projects].sort((a, b) => {
      const aMatch = a.personas.includes(persona) ? 0 : 1;
      const bMatch = b.personas.includes(persona) ? 0 : 1;
      return aMatch - bMatch;
    });
  }, [persona]);

  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading
        eyebrow={ui.projects.eyebrow[lang]}
        title={ui.projects.title[lang]}
        note={ui.projects.note[lang]}
      />
      <ActiveFilterBar />
      <div className="grid gap-6 sm:grid-cols-2">
        {ordered.map((p) => (
          <ProjectCard key={p.id} entry={p} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4 }}
        className="mt-8 border-t border-dashed border-ink-200 pt-6"
      >
        <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-500">
          {ui.projects.alsoLurking[lang]}
        </h3>
        <div className="flex flex-wrap gap-2">
          {personalProjects.map((p) => (
            <span
              key={p.en}
              className="rounded-md border border-ink-200 px-3 py-1.5 text-xs text-ink-600"
            >
              {p[lang]}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
