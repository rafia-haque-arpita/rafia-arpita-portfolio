import type { Metadata } from "next";
import "./globals.css";
import Effects from "@/components/Effects";

export const metadata: Metadata = {
  title: "Rafia Haque Arpita — Data Analyst & Software Developer",
  description:
    "Portfolio of Rafia Haque Arpita — CSE student working with Python, machine learning, AI and web development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Sora:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Effects />
        {children}
      </body>
    </html>
  );
}
