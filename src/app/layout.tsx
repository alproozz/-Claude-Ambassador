import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

import IntroLoader from "@/components/IntroLoader";
import ColorPicker from "@/components/ColorPicker";
import { LanguageProvider } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "M. Aulia Priadana Setiawankusuma | Portfolio",
  description: "Engineering Structured Systems. Informatics graduate building systems and applications, with experience in IT governance, risk & compliance, and information systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <LanguageProvider>
          <IntroLoader />
          {children}
          <ColorPicker />
          <LanguageToggle />
        </LanguageProvider>
      </body>
    </html>
  );
}
