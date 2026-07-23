"use client";

import { useMemo } from "react";
import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";
import { experience } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/i18n";
import ActiveFilterBar from "./ActiveFilterBar";

export default function Experience() {
  const { persona } = usePersona();
  const { lang } = useLanguage();

  const ordered = useMemo(() => {
    return [...experience].sort((a, b) => {
      const aMatch = a.personas.includes(persona) ? 0 : 1;
      const bMatch = b.personas.includes(persona) ? 0 : 1;
      return aMatch - bMatch;
    });
  }, [persona]);

  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading
        eyebrow={ui.experience.eyebrow[lang]}
        title={ui.experience.title[lang]}
      />
      <ActiveFilterBar />
      <div className="space-y-6">
        {ordered.map((entry) => (
          <ExperienceCard key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
