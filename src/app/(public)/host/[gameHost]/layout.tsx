import { ReactNode } from "react";
import "@/assets/styles/globals.scss";


type Params = Promise<{ gameHost: string }>;

export async function generateMetadata(props: {
  params: Params
}){
  const params = await props.params;

  return {
    title: `Zenfyr | Хостинг для ${params?.gameHost || "игры"}`,
    description: `Хостинг для игры ${params?.gameHost || "на Zenfyr"}`,
  };
}

interface LayoutProps {
  children: ReactNode;
  params: Params;
}

export default function GameHostLayout({ children }: LayoutProps) {
  return (
    <main>
      {children}
    </main>
  );
}