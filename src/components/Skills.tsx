"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import SkillPill from "./SkillPill";
import ActiveFilterBar from "./ActiveFilterBar";
import { skills, type SkillCategory } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import { useLanguage } from "@/context/LanguageContext";
import { ui, categoryLabels } from "@/data/i18n";

const CATEGORY_ORDER: SkillCategory[] = [
  "Languages",
  "Backend",
  "Frontend",
  "Embedded & Hardware",
  "Testing",
  "Messaging & Data",
  "DevOps",
  "Tools",
  "OS",
];

export default function Skills() {
  const { persona } = usePersona();
  const { lang } = useLanguage();

  const grouped = useMemo(() => {
    const map = new Map<SkillCategory, typeof skills>();
    for (const cat of CATEGORY_ORDER) map.set(cat, []);
    for (const s of skills) map.get(s.category)?.push(s);

    return CATEGORY_ORDER.map((cat) => ({ category: cat, items: map.get(cat) ?? [] })).sort(
      (a, b) => {
        const aScore = a.items.filter((s) => s.personas.includes(persona)).length;
        const bScore = b.items.filter((s) => s.personas.includes(persona)).length;
        return bScore - aScore;
      }
    );
  }, [persona]);

  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading
        eyebrow={ui.skills.eyebrow[lang]}
        title={ui.skills.title[lang]}
        note={ui.skills.note[lang]}
      />
      <ActiveFilterBar />
      <div className="space-y-7">
        {grouped.map(
          ({ category, items }) =>
            items.length > 0 && (
              <motion.div
                key={category}
                layout
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="mb-2.5 font-mono text-xs uppercase tracking-widest text-ink-500">
                  {categoryLabels[category][lang]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <SkillPill key={s.name} name={s.name} size="md" />
                  ))}
                </div>
              </motion.div>
            )
        )}
      </div>
    </section>
  );
}
