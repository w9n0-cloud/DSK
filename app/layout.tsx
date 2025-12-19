import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "DSK — Elite PvP Bedrock Faction",
  description:
    "Site officiel DSK : faction PvP Bedrock fondée en 2018. Recrutement sélectif, hiérarchie claire, excellence e-sport et discipline.",
  keywords: [
    "DSK",
    "Bedrock",
    "PvP",
    "faction",
    "Minecraft Bedrock",
    "e-sport",
    "DSK Elite",
    "DSK Chill",
  ],
  openGraph: {
    title: "DSK — Elite PvP Bedrock Faction",
    description:
      "Faction PvP Bedrock fondée en 2018. Discipline, hiérarchie, prestige. Rejoignez l'élite ou la branche chill.",
    url: "https://dsk.example",
    siteName: "DSK Faction",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSK — Elite PvP Bedrock Faction",
    description:
      "Site officiel de la faction DSK. Recrutement sélectif, staff structuré, PvP Bedrock de haut niveau.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
      </head>
      <body
        className={`${display.variable} ${body.variable} bg-dsk-bg text-white antialiased font-body`}
      >
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.12),_transparent_35%),radial-gradient(circle_at_30%_40%,rgba(94,227,255,0.08),transparent_30%)]" />
        <div className="noise" />
        <NavBar />
        <main className="relative mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
