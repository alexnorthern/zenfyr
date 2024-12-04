"use client";
import { useRef } from "react";
import { Glow } from "@/components/ui/glows/Glow";
import { Header } from "@/components/entities/freehost/Header";
import { AdvantagesSection } from "@/components/entities/freehost/AdvantagesSection";
import { CompareSection } from "@/components/entities/freehost/CompareSection";
import { TariffsSection } from "@/components/entities/freehost/TariffsSection";
import { PromoSection } from "@/components/entities/freehost/PromoSection";


const FreehostView = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <Glow />
      <Header ref={sectionRef} />
      <AdvantagesSection />
      <CompareSection />
      <TariffsSection ref={sectionRef} />
      <PromoSection />
    </main>
  );
}

export { FreehostView };