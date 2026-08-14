"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { interests } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/i18n";
import { cn } from "@/lib/utils";

export default function Interests() {
  const { persona } = usePersona();
  const { lang } = useLanguage();
  const accent = persona === "software" ? "software" : "embedded";

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeading eyebrow={ui.interests.eyebrow[lang]} title={ui.interests.title[lang]} />
      <div className="flex flex-wrap gap-3">
        {interests.map((it, i) => (
          <motion.div
            key={it.label.en}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className={cn(
              "flex items-center gap-2 rounded-md border px-4 py-2 text-sm text-ink-800 transition-colors",
              accent === "software" ? "border-ink-200 hover:border-software/50" : "border-ink-200 hover:border-embedded/50"
            )}
          >
            <span className="text-base">{it.emoji}</span>
            {it.label[lang]}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
