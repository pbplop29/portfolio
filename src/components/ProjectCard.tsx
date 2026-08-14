"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { ProjectEntry } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import { useFilter } from "@/context/FilterContext";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import SkillPill from "./SkillPill";

export default function ProjectCard({ entry }: { entry: ProjectEntry }) {
  const { persona } = usePersona();
  const { activeSkill } = useFilter();
  const { lang } = useLanguage();
  const accent = persona === "software" ? "software" : "embedded";
  const matchesFilter = activeSkill ? entry.skills.includes(activeSkill) : true;

  return (
    <motion.div
      id={entry.id}
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className={cn(
        "group relative flex flex-col border-t-2 pt-6 transition-colors duration-300",
        accent === "software" ? "border-software/50" : "border-embedded/50",
        activeSkill && matchesFilter && (accent === "software" ? "bg-software/[0.05]" : "bg-embedded/[0.05]"),
        activeSkill && !matchesFilter && "opacity-30"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink-950">{entry.name}</h3>
        <span className="tabular flex-none font-mono text-xs text-ink-500">{entry.period[lang]}</span>
      </div>

      <p className={cn("mt-2 text-sm italic", accent === "software" ? "text-software/80" : "text-embedded/80")}>
        {entry.tagline[lang]}
      </p>

      <ul className="mt-4 flex-1 space-y-2">
        {entry.description.map((d, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-current text-ink-500" />
            {d[lang]}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {entry.skills.map((s) => (
          <SkillPill key={s} name={s} />
        ))}
      </div>

      {entry.links && entry.links.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-ink-200 pt-4 text-sm">
          {entry.links.map((link) => {
            const isRepo = /github\.com|gitlab/.test(link.href);
            const Icon = isRepo ? Github : ExternalLink;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-ink-700 transition-colors hover:text-ink-950"
              >
                <Icon size={15} /> {link.label}
              </a>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
