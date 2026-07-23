"use client";

import { motion } from "framer-motion";
import { usePersona } from "@/context/PersonaContext";
import { cn } from "@/lib/utils";

export default function PersonaToggle({ compact = false }: { compact?: boolean }) {
  const { persona, setPersona } = usePersona();

  return (
    <div
      className={cn(
        "relative flex items-center rounded-full border border-ink-700 bg-ink-900/80 p-1 backdrop-blur",
        compact ? "text-xs" : "text-sm"
      )}
      role="tablist"
      aria-label="View portfolio as"
    >
      <motion.div
        className="absolute inset-y-1 rounded-full"
        initial={false}
        animate={{
          left: persona === "software" ? 4 : "50%",
          right: persona === "software" ? "50%" : 4,
          backgroundColor: persona === "software" ? "#3b82f6" : "#e8a33d",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 32 }}
      />
      <button
        role="tab"
        aria-selected={persona === "software"}
        onClick={() => setPersona("software")}
        className={cn(
          "relative z-10 rounded-full px-3 py-1.5 font-medium transition-colors",
          compact ? "px-2.5 py-1" : "",
          persona === "software" ? "text-ink-950" : "text-ink-300 hover:text-ink-100"
        )}
      >
        💻 Software
      </button>
      <button
        role="tab"
        aria-selected={persona === "embedded"}
        onClick={() => setPersona("embedded")}
        className={cn(
          "relative z-10 rounded-full px-3 py-1.5 font-medium transition-colors",
          compact ? "px-2.5 py-1" : "",
          persona === "embedded" ? "text-ink-950" : "text-ink-300 hover:text-ink-100"
        )}
      >
        ⚙️ Embedded
      </button>
    </div>
  );
}
