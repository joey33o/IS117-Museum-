import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AdaptiveNav } from "@/components/site/adaptive-nav";
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
  title: "The Celestial Eye",
  description: "A scroll-driven museum exploring telescope history through adaptive editorial design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="app-shell">
          <AdaptiveNav />
          <main id="main-content" className="app-main" tabIndex={-1}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
