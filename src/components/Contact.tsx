"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MessageCircle, Gamepad2, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/i18n";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { persona } = usePersona();
  const { lang } = useLanguage();
  const accent = persona === "software" ? "software" : "embedded";
  const [copied, setCopied] = useState(false);

  const links = [
    { icon: Mail, label: ui.contact.email[lang], value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: ui.contact.phone[lang], value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", value: "biplov-nitrkl", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "pbplop29", href: profile.github },
    { icon: Gamepad2, label: "Steam", value: profile.steam, href: profile.steamUrl },
  ];

  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(profile.discord);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — silently ignore
    }
  };

  const iconWrapClass = cn(
    "flex h-10 w-10 flex-none items-center justify-center rounded-full transition-colors",
    accent === "software"
      ? "bg-software/15 text-software group-hover:bg-software group-hover:text-ink-950"
      : "bg-embedded/15 text-embedded group-hover:bg-embedded group-hover:text-ink-950"
  );

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading
        eyebrow={ui.contact.eyebrow[lang]}
        title={ui.contact.title[lang]}
        note={ui.contact.note[lang]}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map(({ icon: Icon, label, value, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group flex items-center gap-4 rounded-2xl border border-ink-800 bg-ink-900/40 p-5 transition-colors hover:border-ink-600"
          >
            <div className={iconWrapClass}>
              <Icon size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-ink-500">{label}</p>
              <p className="truncate text-sm font-medium text-ink-100">{value}</p>
            </div>
          </motion.a>
        ))}

        <motion.button
          onClick={handleCopyDiscord}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: links.length * 0.05 }}
          className="group flex items-center gap-4 rounded-2xl border border-ink-800 bg-ink-900/40 p-5 text-left transition-colors hover:border-ink-600"
        >
          <div className={iconWrapClass}>
            {copied ? <Check size={18} /> : <MessageCircle size={18} />}
          </div>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-widest text-ink-500">Discord</p>
            <p className="truncate text-sm font-medium text-ink-100">{profile.discord}</p>
            <p className="mt-0.5 truncate text-[11px] text-ink-500">
              {copied ? ui.contact.copied[lang] : ui.contact.copyDiscord[lang]}
            </p>
          </div>
        </motion.button>
      </div>
    </section>
  );
}
