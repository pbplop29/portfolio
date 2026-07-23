"use client";

import { FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { DocumentLink } from "@/data/content";

export default function DocLink({ label, file }: DocumentLink) {
  const { lang } = useLanguage();

  return (
    <a
      href={file}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-ink-700 px-2.5 py-1 font-mono text-[11px] text-ink-500 transition-colors hover:border-ink-500 hover:text-ink-300"
    >
      <FileText size={11} /> {label[lang]}
    </a>
  );
}
