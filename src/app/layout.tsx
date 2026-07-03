import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://aperture.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aperture — Bring everything into focus",
    template: "%s · Aperture",
  },
  description:
    "Aperture is the AI-native analytics and decision-intelligence platform. Turn scattered signals into clear, confident decisions — in seconds, not sprints.",
  keywords: [
    "analytics",
    "decision intelligence",
    "AI analytics",
    "dashboards",
    "business intelligence",
    "Aperture",
  ],
  authors: [{ name: "Aperture" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Aperture — Bring everything into focus",
    description:
      "The AI-native analytics platform that turns scattered signals into confident decisions.",
    siteName: "Aperture",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aperture — Bring everything into focus",
    description:
      "The AI-native analytics platform that turns scattered signals into confident decisions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
