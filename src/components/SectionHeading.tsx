"use client";

import { motion } from "framer-motion";
import { usePersona } from "@/context/PersonaContext";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  const { persona } = usePersona();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <p
        className={cn(
          "mb-2 font-mono text-xs uppercase tracking-[0.2em]",
          persona === "software" ? "text-software" : "text-embedded"
        )}
      >
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl">{title}</h2>
      {note && <p className="mt-2 max-w-xl text-sm text-ink-400">{note}</p>}
    </motion.div>
  );
}
