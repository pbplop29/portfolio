"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import PersonaToggle from "./PersonaToggle";
import LanguageToggle from "./LanguageToggle";
import { profile } from "@/data/content";
import { usePersona } from "@/context/PersonaContext";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/data/i18n";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { persona } = usePersona();
  const { lang } = useLanguage();

  const links = [
    { href: "#experience", label: ui.nav.experience[lang] },
    { href: "#skills", label: ui.nav.skills[lang] },
    { href: "#projects", label: ui.nav.projects[lang] },
    { href: "#education", label: ui.nav.education[lang] },
    { href: "#contact", label: ui.nav.contact[lang] },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-ink-800 bg-ink-950/85 backdrop-blur" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className={cn(
            "font-mono text-sm font-semibold tracking-tight transition-colors",
            persona === "software" ? "text-software" : "text-embedded"
          )}
        >
          Biplov Pokhrel
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6 text-sm text-ink-300">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-ink-50">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <PersonaToggle compact />
            <LanguageToggle compact />
          </div>
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-1.5 rounded-full border border-ink-700 px-3.5 py-1.5 text-sm text-ink-200 transition-colors hover:border-ink-500 hover:text-ink-50"
          >
            <Download size={14} /> {ui.nav.resume[lang]}
          </a>
        </div>

        <button
          className="text-ink-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-800 bg-ink-950/95 px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4 text-sm text-ink-200">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PersonaToggle compact />
              <LanguageToggle compact />
            </div>
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-1.5 rounded-full border border-ink-700 px-3.5 py-1.5 text-sm text-ink-200"
            >
              <Download size={14} /> {ui.nav.resume[lang]}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
