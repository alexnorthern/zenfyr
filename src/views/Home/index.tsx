"use client";
import { useRef } from "react";
import { AdvantagesSection } from "@/components/entities/landing/AdvantagesSection";
import { CompareSection } from "@/components/entities/landing/CompareSection";
import { Header } from "@/components/entities/landing/Header";
import { TariffsSection } from "@/components/entities/landing/TariffsSection";
import { YourControlSection } from "@/components/entities/landing/YourControlSection";
import { Glow } from "@/components/ui/glows/Glow";

const HomeView = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <Glow />
      <Header ref={sectionRef} />
      <AdvantagesSection />
      <CompareSection />
      <YourControlSection />
      <TariffsSection ref={sectionRef} />
    </main>
  );
}

export { HomeView };