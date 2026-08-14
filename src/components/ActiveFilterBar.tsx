"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useFilter } from "@/context/FilterContext";
import { usePersona } from "@/context/PersonaContext";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/i18n";
import { cn } from "@/lib/utils";

export default function ActiveFilterBar() {
  const { activeSkill, setActiveSkill } = useFilter();
  const { persona } = usePersona();
  const { lang } = useLanguage();

  return (
    <AnimatePresence>
      {activeSkill && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
          animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
          className="overflow-hidden"
        >
          <div
            className={cn(
              "flex w-fit items-center gap-2 rounded-md border px-3.5 py-1.5 text-xs font-mono",
              persona === "software" ? "border-software/50 text-software" : "border-embedded/50 text-embedded"
            )}
          >
            {ui.filterBar.tracing[lang]} <span className="font-semibold">{activeSkill}</span> {ui.filterBar.acrossThePage[lang]}
            <button
              onClick={() => setActiveSkill(null)}
              aria-label="Clear filter"
              className="ml-1 rounded-full p-0.5 hover:bg-ink-950/10"
            >
              <X size={13} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
