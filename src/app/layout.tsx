import type { Metadata } from "next";
import "@/assets/styles/globals.scss";
import { Navigation } from "@/components/widgets/Navigation";
import { Footer } from "@/components/widgets/Footer";

export const metadata: Metadata = {
  title: "Zenfyr",
  description: "Самый надежный, производительный и стабильный хостинг-сервис на рынке",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Navigation />
        { children}
        <Footer />
      </body>
    </html>
  );
}
