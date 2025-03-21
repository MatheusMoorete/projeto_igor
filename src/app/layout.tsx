import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Mafia - Domine Seu Jogo",
  description: "Aprimore sua experiência de jogo com os cheats The Mafia mais avançados e personalizáveis disponíveis.",
  keywords: ["cheats", "gaming", "software", "vanguard", "the mafia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0014] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
