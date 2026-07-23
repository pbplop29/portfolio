"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { usePersona } from "@/context/PersonaContext";
import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/content";
import { ui } from "@/data/i18n";
import { cn } from "@/lib/utils";

export default function ResumeSection() {
  const { persona } = usePersona();
  const { lang } = useLanguage();
  const accent = persona === "software" ? "software" : "embedded";

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className={cn(
          "flex flex-col items-center gap-5 rounded-2xl border p-10 text-center sm:flex-row sm:justify-between sm:text-left",
          accent === "software" ? "border-software/40 bg-software/[0.05]" : "border-embedded/40 bg-embedded/[0.05]"
        )}
      >
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "flex h-12 w-12 flex-none items-center justify-center rounded-xl",
              accent === "software" ? "bg-software/15 text-software" : "bg-embedded/15 text-embedded"
            )}
          >
            <FileText size={22} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink-50">{ui.resumeSection.heading[lang]}</h3>
            <p className="text-sm text-ink-400">{ui.resumeSection.subtext[lang]}</p>
          </div>
        </div>
        <a
          href={profile.resumeUrl}
          download
          className={cn(
            "flex flex-none items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-105",
            accent === "software" ? "bg-software" : "bg-embedded"
          )}
        >
          <Download size={16} /> {ui.resumeSection.button[lang]}
        </a>
      </motion.div>
    </section>
  );
}
