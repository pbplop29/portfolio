"use client";

import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import { useFilter } from "@/context/FilterContext";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import SkillPill from "./SkillPill";

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
        "relative rounded-2xl border p-6 transition-all duration-300 sm:p-7",
        activeSkill && matchesFilter
          ? accent === "software"
            ? "border-software/60 bg-software/[0.04] shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
            : "border-embedded/60 bg-embedded/[0.04] shadow-[0_0_0_1px_rgba(232,163,61,0.15)]"
          : "border-ink-800 bg-ink-900/40",
        activeSkill && !matchesFilter && "opacity-30",
        !isRelevant && !activeSkill && "opacity-70"
      )}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-ink-50">{entry.role[lang]}</h3>
        <span className="font-mono text-xs text-ink-500">{entry.period[lang]}</span>
      </div>
      <p className="mt-0.5 text-sm text-ink-400">
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
              b.personas.includes(persona) ? "text-ink-300" : "text-ink-500 opacity-60"
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
    </motion.div>
  );
}
