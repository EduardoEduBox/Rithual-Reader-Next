import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "(૨¡Ƭષαℓ Reader",
  description:
    "(૨¡Ƭષαℓ é um mangá brasileiro sobre um mundo que presencia conflitos sangrentos entre humanos e demônios que disputam influência sobre a sociedade. Nesta história você irá acompanhar a vida de Singer, um garoto tímido e bastante sorridente que está descobrindo o mundo pela primeira vez ao lado de seus amigos Aika, San e Madger",
};

// importations go here!

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
