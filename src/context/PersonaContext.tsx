"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Persona } from "@/data/content";

interface PersonaContextValue {
  persona: Persona;
  setPersona: (p: Persona) => void;
  toggle: () => void;
}

const PersonaContext = createContext<PersonaContextValue | null>(null);

export function PersonaProvider({ children }: { children: ReactNode }) {
  const [persona, setPersona] = useState<Persona>("software");

  const toggle = () => setPersona((p) => (p === "software" ? "embedded" : "software"));

  return (
    <PersonaContext.Provider value={{ persona, setPersona, toggle }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const ctx = useContext(PersonaContext);
  if (!ctx) throw new Error("usePersona must be used within PersonaProvider");
  return ctx;
}
