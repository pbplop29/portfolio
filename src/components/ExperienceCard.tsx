"use client";

import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import { useFilter } from "@/context/FilterContext";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import SkillPill from "./SkillPill";
import DocLink from "./DocLink";

export default function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const { persona } = usePersona();
  const { activeSkill } = useFilter();
  const { lang } = useLanguage();

  const matchesFilter = activeSkill ? entry.skills.includes(activeSkill) : true;
  const isRelevant = entry.personas.includes(persona);
  const accent = persona === "software" ? "software" : "embedded";

  return (
    <motion.div
      id={entry.id}
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className={cn(
        "group relative -mx-6 rounded-lg border-t border-ink-200/70 px-6 py-8 transition-colors duration-300 first:border-t-0 first:pt-0 sm:-mx-7 sm:px-7",
        activeSkill && matchesFilter && (accent === "software" ? "bg-software/[0.05]" : "bg-embedded/[0.05]"),
        activeSkill && !matchesFilter && "opacity-30",
        !isRelevant && !activeSkill && "opacity-70"
      )}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-ink-950">{entry.role[lang]}</h3>
        <span className="tabular font-mono text-xs text-ink-500">{entry.period[lang]}</span>
      </div>
      <p className="mt-0.5 text-sm text-ink-600">
        {entry.org} · {entry.location}
      </p>
      <p className={cn("mt-3 text-sm italic", accent === "software" ? "text-software/80" : "text-embedded/80")}>
        {entry.blurb[lang]}
      </p>

      <ul className="mt-4 space-y-2">
        {entry.bullets.map((b, i) => (
          <li
            key={i}
            className={cn(
              "flex gap-2.5 text-sm leading-relaxed transition-opacity",
              b.personas.includes(persona) ? "text-ink-700" : "text-ink-500 opacity-60"
            )}
          >
            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-current" />
            {b.text[lang]}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {entry.skills.map((s) => (
          <SkillPill key={s} name={s} />
        ))}
      </div>

      {entry.documents && entry.documents.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 border-t border-dashed border-ink-200 pt-4">
          {entry.documents.map((d) => (
            <DocLink key={d.file} label={d.label} file={d.file} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
