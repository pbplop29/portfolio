"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Clock } from "lucide-react";
import type { ProjectEntry } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import { useFilter } from "@/context/FilterContext";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/i18n";
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
        "relative flex flex-col rounded-2xl border p-6 transition-all duration-300",
        activeSkill && matchesFilter
          ? accent === "software"
            ? "border-software/60 bg-software/[0.04]"
            : "border-embedded/60 bg-embedded/[0.04]"
          : "border-ink-800 bg-ink-900/40",
        activeSkill && !matchesFilter && "opacity-30"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink-50">{entry.name}</h3>
        <span className="flex-none font-mono text-xs text-ink-500">{entry.period[lang]}</span>
      </div>

      <p className={cn("mt-2 text-sm italic", accent === "software" ? "text-software/80" : "text-embedded/80")}>
        {entry.tagline[lang]}
      </p>

      <ul className="mt-4 flex-1 space-y-2">
        {entry.description.map((d, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-300">
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

      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-ink-800 pt-4 text-sm">
        {entry.links && entry.links.length > 0 ? (
          entry.links.map((link) => {
            const isRepo = /github\.com|gitlab/.test(link.href);
            const Icon = isRepo ? Github : ExternalLink;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-ink-300 transition-colors hover:text-ink-50"
              >
                <Icon size={15} /> {link.label}
              </a>
            );
          })
        ) : (
          <span className="flex items-center gap-1.5 text-ink-600">
            <Clock size={14} /> {ui.projects.repoComingSoon[lang]}
          </span>
        )}
      </div>
    </motion.div>
  );
}
