"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { usePersona } from "@/context/PersonaContext";
import { useLanguage } from "@/context/LanguageContext";
import { profile } from "@/data/content";
import { ui } from "@/data/i18n";
import { cn } from "@/lib/utils";

function TypedLine({ text, className }: { text: string; className?: string }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [text]);

  return (
    <p className={className}>
      {shown}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-blink bg-current align-middle" />
    </p>
  );
}

export default function Hero() {
  const { persona } = usePersona();
  const { lang } = useLanguage();
  const accent = persona === "software" ? "text-software" : "text-embedded";
  const tagline = (persona === "software" ? profile.taglineSoftware : profile.taglineEmbedded)[lang];

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 circuit-bg opacity-40" />
      <div
        className={cn(
          "pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl transition-colors duration-700",
          persona === "software" ? "bg-software/10" : "bg-embedded/10"
        )}
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full max-w-2xl lg:max-w-none lg:flex-1">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn("mb-4 font-mono text-sm", accent)}
          >
            {ui.hero.greeting[lang]}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold tracking-tight text-ink-50 sm:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <div className="mt-5 h-8 font-mono text-base text-ink-300 sm:text-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={persona}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <TypedLine text={tagline} />
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-xl text-ink-400"
          >
            {profile.heroIntro[lang]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#experience"
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-105",
                persona === "software" ? "bg-software" : "bg-embedded"
              )}
            >
              {ui.hero.ctaSeeWork[lang]}
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="rounded-full border border-ink-700 px-5 py-2.5 text-sm font-semibold text-ink-100 transition-colors hover:border-ink-400"
            >
              {ui.hero.ctaDownload[lang]}
            </a>

            <div className="ml-1 flex items-center gap-3 text-ink-400">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-ink-50">
                <Github size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-ink-50">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-ink-50">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="relative flex-none"
        >
          <div
            className={cn(
              "absolute -inset-3 rounded-full blur-2xl transition-colors duration-700",
              persona === "software" ? "bg-software/25" : "bg-embedded/25"
            )}
          />
          <div
            className={cn(
              "relative h-36 w-36 overflow-hidden rounded-full border-2 transition-colors duration-500 sm:h-44 sm:w-44",
              persona === "software" ? "border-software" : "border-embedded"
            )}
          >
            <Image
              src="/images/photo.jpg"
              alt="Biplov Pokhrel"
              fill
              sizes="176px"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#experience"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-500 hover:text-ink-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  );
}
