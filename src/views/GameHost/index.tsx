import { TariffsSection } from "@/components/entities/GameHost/TariffsSection";
import { AnswersSection } from "@/components/entities/GameHost/AnswersSection";
import { PromoSection } from "@/components/entities/GameHost/PromoSection";


const GameHostView = ({ gameId }: { gameId: string }) => {
  return (
    <main>
      <TariffsSection gameId={gameId} />
      <AnswersSection />
      <PromoSection />
    </main>
  );
}

export { GameHostView };