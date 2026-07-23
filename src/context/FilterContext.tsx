"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextValue {
  activeSkill: string | null;
  setActiveSkill: (skill: string | null) => void;
}

const FilterContext = createContext<FilterContextValue | null>(null);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [activeSkill, setActiveSkillState] = useState<string | null>(null);

  const setActiveSkill = (skill: string | null) => {
    setActiveSkillState((current) => (current === skill ? null : skill));
  };

  return (
    <FilterContext.Provider value={{ activeSkill, setActiveSkill }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilter must be used within FilterProvider");
  return ctx;
}
