import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PersonaProvider } from "@/context/PersonaContext";
import { FilterProvider } from "@/context/FilterContext";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
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
  title: "Biplov Pokhrel — Software & Embedded Engineer",
  description:
    "Biplov Pokhrel — Software Engineer at Lowe's turned Automotive Software Engineering student. Backend systems, embedded firmware, and everything in between.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased grain">
        <LanguageProvider>
          <PersonaProvider>
            <FilterProvider>{children}</FilterProvider>
          </PersonaProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
