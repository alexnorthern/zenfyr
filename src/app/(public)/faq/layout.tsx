import type { Metadata } from "next";
import "@/assets/styles/globals.scss";

export const metadata: Metadata = {
  title: "Zenfyr | FAQ",
  description: "Самый надежный, производительный и стабильный хостинг-сервис на рынке",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>
    { children }   
   </main>
  );
}
