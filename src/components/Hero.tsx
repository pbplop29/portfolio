"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Gamepad2, Check } from "lucide-react";
import { usePersona } from "@/context/PersonaContext";
import { useLanguage } from "@/context/LanguageContext";
import { profile, type Persona } from "@/data/content";
import { ui } from "@/data/i18n";
import { cn } from "@/lib/utils";

function scrollToWork() {
  document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
}

function ContactIcon({
  icon: Icon,
  imageSrc,
  value,
  href,
  onClick,
}: {
  icon?: typeof Mail;
  imageSrc?: string;
  value: string;
  href?: string;
  onClick?: () => void;
}) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      type={href ? undefined : "button"}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="group/contact relative text-ink-500 transition-colors hover:text-ink-900"
      aria-label={value}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          width={18}
          height={18}
          className="opacity-60 transition-opacity duration-150 group-hover/contact:opacity-100"
        />
      ) : (
        Icon && <Icon size={18} />
      )}
      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink-950 px-2 py-1 text-[11px] font-medium text-ink-50 opacity-0 shadow-[0_8px_16px_-8px_rgba(14,13,9,0.45)] transition-opacity duration-150 group-hover/contact:opacity-100">
        {value}
      </span>
    </Tag>
  );
}

function StageObject({
  persona,
  label,
  tagline,
  src,
  driftDelay,
  flip,
}: {
  persona: Persona;
  label: string;
  tagline: string;
  src: string;
  driftDelay: number;
  flip?: boolean;
}) {
  const { setPersona } = usePersona();
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 200, damping: 20 });
  const accentText = persona === "software" ? "text-software" : "text-embedded";

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => {
        setPersona(persona);
        scrollToWork();
      }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      className="group/stage relative flex w-full max-w-[300px] flex-col items-center sm:max-w-[360px]"
      style={{ perspective: 900 }}
      aria-label={label}
    >
      <div className="pointer-events-none absolute bottom-2 h-6 w-3/4 rounded-[50%] bg-ink-950/15 blur-xl" />

      <motion.div
        style={{ rotateX, rotateY }}
        animate={{ y: [0, -10, 0] }}
        transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: driftDelay } }}
        whileHover={{ scale: 1.045 }}
        whileFocus={{ scale: 1.045 }}
        className="relative w-full"
      >
        <div className="relative aspect-[3/2] w-full">
          <Image
            src={src}
            alt={label}
            fill
            sizes="(min-width: 640px) 360px, 300px"
            priority
            className={cn(
              "select-none object-contain drop-shadow-[0_18px_20px_rgba(14,13,9,0.18)]",
              flip && "-scale-x-100"
            )}
          />
        </div>
      </motion.div>

      <div className="relative mt-5 flex flex-col items-center gap-1 text-center">
        <span className={cn("font-mono text-xs font-medium uppercase tracking-[0.18em]", accentText)}>
          {label}
        </span>
        <span className="max-w-[240px] text-sm text-ink-700 opacity-0 transition-opacity duration-300 group-hover/stage:opacity-100 group-focus-visible/stage:opacity-100">
          {tagline}
        </span>
      </div>
    </button>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const [discordCopied, setDiscordCopied] = useState(false);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(profile.discord);
      setDiscordCopied(true);
      setTimeout(() => setDiscordCopied(false), 1800);
    } catch {
      // clipboard API unavailable -silently ignore
    }
  };

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-16 pt-28">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mx-auto w-full max-w-5xl"
      >
        <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.02em] text-ink-950 sm:text-7xl">
          {profile.name}
        </h1>
        <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md">
            <p className="text-base text-ink-700">{profile.heroIntro[lang]}</p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-600">{profile.heroCta[lang]}</p>
          </div>
          <div className="flex items-center gap-5 sm:mr-6">
            <ContactIcon icon={Github} value="pbplop29" href={profile.github} />
            <ContactIcon icon={Linkedin} value="biplov-nitrkl" href={profile.linkedin} />
            <ContactIcon icon={Mail} value={profile.email} href={`mailto:${profile.email}`} />
            <ContactIcon icon={Phone} value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
            <ContactIcon
              icon={discordCopied ? Check : undefined}
              imageSrc={discordCopied ? undefined : "/images/discord.png"}
              value={discordCopied ? ui.contact.copied[lang] : `Discord: ${profile.discord}`}
              onClick={copyDiscord}
            />
            <ContactIcon icon={Gamepad2} value={`Steam: ${profile.steam}`} href={profile.steamUrl} />
          </div>
        </div>
      </motion.div>

      <div className="relative flex flex-1 items-center justify-center">
        <div className="flex w-full max-w-3xl flex-col items-center justify-center gap-14 sm:flex-row sm:items-start sm:justify-around sm:gap-6">
          <StageObject
            persona="embedded"
            label={lang === "de" ? "Automotive" : "Automotive"}
            tagline={profile.taglineEmbedded[lang]}
            src="/images/car.png"
            driftDelay={0}
          />
          <StageObject
            persona="software"
            label="Software"
            tagline={profile.taglineSoftware[lang]}
            src="/images/laptop.png"
            driftDelay={1.4}
            flip
          />
        </div>
      </div>
    </section>
  );
}
