import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric L. — Développeur Front-End",
  description:
    "Portfolio de Eric L., développeur front-end basé à Nantes. Spécialisé React, Next.js, TypeScript avec un background design de 18 ans.",
  openGraph: {
    title: "Eric L. — Développeur Front-End",
    description:
      "Portfolio de Eric L., développeur front-end basé à Nantes.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-stone-50">{children}</body>
    </html>
  );
}
