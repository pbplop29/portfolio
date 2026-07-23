"use client";

import { usePersona } from "@/context/PersonaContext";
import { useFilter } from "@/context/FilterContext";
import { cn } from "@/lib/utils";

export default function SkillPill({
  name,
  size = "sm",
}: {
  name: string;
  size?: "sm" | "md";
}) {
  const { persona } = usePersona();
  const { activeSkill, setActiveSkill } = useFilter();
  const active = activeSkill === name;
  const accent = persona === "software" ? "software" : "embedded";

  return (
    <button
      onClick={() => setActiveSkill(name)}
      className={cn(
        "rounded-full border font-mono transition-colors",
        size === "sm" ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs",
        active
          ? accent === "software"
            ? "border-software bg-software text-ink-950"
            : "border-embedded bg-embedded text-ink-950"
          : "border-ink-700 text-ink-400 hover:border-ink-500 hover:text-ink-200"
      )}
    >
      {name}
    </button>
  );
}
