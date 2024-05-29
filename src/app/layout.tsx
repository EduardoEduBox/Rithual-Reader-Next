import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { AuthContextProvider } from "./Context/AuthContext";
import { FirestoreContextProvider } from "./Context/FirestoreContext";
import { LikesContextProvider } from "./Context/LikesContext";
import { FirstTimeContextProvider } from "./Context/FirstTimeContent";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "(૨¡Ƭષαℓ Reader",
  description:
    "Rithual é um mangá brasileiro sobre um mundo que presencia conflitos sangrentos entre humanos e demônios que disputam influência sobre a sociedade. Nesta história você irá acompanhar a vida de Singer, um garoto tímido e bastante sorridente que está descobrindo o mundo pela primeira vez ao lado de seus amigos Aika, San e Madger",
};

// importations go here!

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <FirestoreContextProvider>
        <AuthContextProvider>
          <LikesContextProvider>
            <FirstTimeContextProvider>
              <body className={inter.className}>{children}</body>
            </FirstTimeContextProvider>
          </LikesContextProvider>
        </AuthContextProvider>
      </FirestoreContextProvider>
    </html>
  );
}
