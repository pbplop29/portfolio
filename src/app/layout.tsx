import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PersonaProvider } from "@/context/PersonaContext";
import { FilterProvider } from "@/context/FilterContext";
import { LanguageProvider } from "@/context/LanguageContext";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Biplov Pokhrel",
  description:
    "Biplov Pokhrel, Software Engineer at Lowe's turned Automotive Software Engineering student. Backend systems, embedded firmware, and everything in between.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-ink-50 font-sans text-ink-950 antialiased">
        {/*
          THESIS: a recruiter's page reads flat, printed, and certain, the dual-persona pick is composition and ink, never a colored glow.
          OWN-WORLD: paper-and-ink editorial: off-white ground, near-black ink, one deep muted accent per persona (indigo software / rust embedded); no blur-glow, no radial gradient, no dot-texture chrome anywhere, hover and active states are flat ink tints and rings only.
          STORY: visitor lands on a flat printed hero, the name set large as a masthead; hovering or picking a persona tints its object and the other stays plain; they pick a lane and scroll into the ranked content.
          FIRST VIEWPORT: thin nav; masthead-scale name, one-line intro, and contact row together up top; car and laptop sit side by side below as the only picker, no menu.
          FORM: Cursor-Lit Grid was the surface-scope roll (seed key 683740a7), but its dot-field material read as noise once built and was cut live per direct feedback; the composition (masthead + side-by-side objects) is kept, replacing the prior Concept-Reveal Stage world pinned from inspiration.png.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
        */}
        <LanguageProvider>
          <PersonaProvider>
            <FilterProvider>{children}</FilterProvider>
          </PersonaProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
