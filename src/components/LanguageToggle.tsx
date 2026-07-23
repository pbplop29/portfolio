"use client";

import { useLanguage } from "@/context/LanguageContext";
import { usePersona } from "@/context/PersonaContext";
import { cn } from "@/lib/utils";

export default function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();
  const { persona } = usePersona();
  const accent = persona === "software" ? "software" : "embedded";

  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-ink-700 bg-ink-900/80 p-0.5 font-mono backdrop-blur",
        compact ? "text-[11px]" : "text-xs"
      )}
      role="tablist"
      aria-label="Language"
    >
      {(["en", "de"] as const).map((l) => (
        <button
          key={l}
          role="tab"
          aria-selected={lang === l}
          onClick={() => setLang(l)}
          className={cn(
            "rounded-full px-2.5 py-1 font-semibold uppercase transition-colors",
            lang === l
              ? accent === "software"
                ? "bg-software text-ink-950"
                : "bg-embedded text-ink-950"
              : "text-ink-400 hover:text-ink-200"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
