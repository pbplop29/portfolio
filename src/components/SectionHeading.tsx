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
      <h2 className="text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
        {title}
        <span
          className={cn(
            "ml-3 text-xl font-normal italic",
            persona === "software" ? "text-software/80" : "text-embedded/80"
          )}
        >
          -{eyebrow}
        </span>
      </h2>
      {note && <p className="mt-2 max-w-xl text-sm text-ink-600">{note}</p>}
    </motion.div>
  );
}
