"use client";

import { motion } from "framer-motion";
import { GraduationCap, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SkillPill from "./SkillPill";
import DocLink from "./DocLink";
import { education, languages } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import { useFilter } from "@/context/FilterContext";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/i18n";
import { cn } from "@/lib/utils";

export default function Education() {
  const { persona } = usePersona();
  const { activeSkill } = useFilter();
  const { lang } = useLanguage();
  const accent = persona === "software" ? "software" : "embedded";

  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow={ui.education.eyebrow[lang]} title={ui.education.title[lang]} />
      <div className="space-y-6">
        {education.map((e) => {
          const matchesFilter = activeSkill ? e.skills.includes(activeSkill) : true;
          return (
            <motion.div
              key={e.id}
              id={e.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className={cn(
                "rounded-2xl border p-6 transition-all duration-300 sm:p-7",
                activeSkill && matchesFilter
                  ? accent === "software"
                    ? "border-software/60 bg-software/[0.04]"
                    : "border-embedded/60 bg-embedded/[0.04]"
                  : "border-ink-800 bg-ink-900/40",
                activeSkill && !matchesFilter && "opacity-30"
              )}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full",
                    accent === "software" ? "bg-software/15 text-software" : "bg-embedded/15 text-embedded"
                  )}
                >
                  <GraduationCap size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold text-ink-50">{e.school}</h3>
                    <span className="font-mono text-xs text-ink-500">{e.period[lang]}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-ink-400">{e.degree[lang]} · {e.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{e.detail[lang]}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {e.skills.map((s) => (
                      <SkillPill key={s} name={s} />
                    ))}
                  </div>
                  {e.documents && e.documents.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2 border-t border-dashed border-ink-800 pt-4">
                      {e.documents.map((d) => (
                        <DocLink key={d.file} label={d.label} file={d.file} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4 }}
        className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-ink-800 bg-ink-900/40 p-5"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
          {ui.education.languagesLabel[lang]}
        </span>
        {languages.map((l) => (
          <span
            key={l.name.en}
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-700 px-3 py-1 text-xs text-ink-300"
          >
            {l.name[lang]} · {l.level}
            {l.documents?.map((d) => (
              <a
                key={d.file}
                href={d.file}
                target="_blank"
                rel="noreferrer"
                title={d.label[lang]}
                className="text-ink-500 transition-colors hover:text-ink-300"
              >
                <FileText size={12} />
              </a>
            ))}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
