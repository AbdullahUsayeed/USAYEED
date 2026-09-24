import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://usayeed.com"),
  title: {
    default: "USAYEED | Hardware & Software Development Studio",
    template: "%s | USAYEED",
  },
  description:
    "USAYEED builds production-ready software for hardware-connected products — Automotive UI, IoT command centers, and AI automation for engineering teams and startups.",
  keywords: [
    "hardware software development company",
    "automotive UI development",
    "IoT dashboard development",
    "AI automation engineering",
    "embedded UI development",
    "automotive HMI company",
    "hardware connected software studio",
    "industrial IoT software",
    "AI workflow automation",
    "engineering studio",
    "custom automotive interface",
    "IoT sensor dashboard",
    "UCAD FreeCAD AI CAD agent",
    "USAYEED",
  ],
  authors: [{ name: "USAYEED", url: "https://usayeed.com" }],
  creator: "USAYEED",
  publisher: "USAYEED",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://usayeed.com",
    siteName: "USAYEED",
    title: "USAYEED | Hardware & Software Development Studio",
    description:
      "Production-ready software for hardware-connected products. Automotive UI, IoT dashboards, and AI automation.",
    images: [
      {
        url: "/AutomotiveDisplaySample.jpeg",
        width: 1200,
        height: 630,
        alt: "USAYEED — Automotive UI Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "USAYEED | Hardware & Software Development Studio",
    description:
      "Production-ready software for hardware-connected products. Automotive UI, IoT dashboards, and AI automation.",
    images: ["/AutomotiveDisplaySample.jpeg"],
  },
  alternates: {
    canonical: "https://usayeed.com",
  },
  icons: {
    icon: "/logo-u.svg",
  },
  // To add Google Search Console verification, get your code from
  // https://search.google.com/search-console → Add Property → HTML tag
  // then uncomment the line below and paste the alphanumeric code:
  // verification: { google: "PASTE_YOUR_CODE_HERE" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
