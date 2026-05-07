import type { Metadata, Viewport } from "next";
import { Nunito, Dancing_Script } from "next/font/google";
import "./globals.css";
import "../styles/components.css";
import CursorStars from "../components/CursorStars";
import Sidebar from "../components/Sidebar";
import HomeButton from "../components/HomeButton";
import Footer from "../components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Cute Moments",
      url: "https://cute-moments.vercel.app",
      logo: "https://cute-moments.vercel.app/favicon-32x32.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "rahuljangir99501@gmail.com",
        },
      ],
    },
    {
      "@type": "WebSite",
      url: "https://cute-moments.vercel.app",
      name: "Cute Moments",
      description:
        "A romantic app for couples to send virtual hugs, write love letters, create digital scrapbooks, and celebrate relationship milestones.",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cute-moments.vercel.app"),
  title: {
    default: "Cute Moments | The Ultimate Romantic App for Couples 💖",
    template: "%s | Cute Moments",
  },
  description:
    "Cute Moments is the best romantic app for couples to share virtual hugs, create digital scrapbooks, write love letters, and track relationship milestones. Perfect for long-distance love! 💑",
  keywords: [
    "romantic app for couples",
    "love story app",
    "relationship app",
    "virtual hug",
    "love letter online",
    "valentine proposal",
    "digital scrapbook",
    "couple memories",
    "long distance love",
    "romantic ideas",
    "cute couple app",
    "love calculator",
    "promise jar",
    "relationship quiz",
  ],
  authors: [{ name: "Cute Moments Team" }],
  creator: "Cute Moments",
  publisher: "Cute Moments",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Cute Moments | Celebrate Your Love Story 💖",
    description:
      "Create, share, and cherish your most romantic memories with interactive features designed for couples.",
    url: "https://cute-moments.vercel.app",
    siteName: "Cute Moments",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cute Moments - A Romantic Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cute Moments | The Ultimate Romantic App 💑",
    description:
      "Send virtual hugs and build a digital scrapbook of your relationship.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: ["yXQivvAEj4qUbISTD9AMVhyAPkVPkZbiU4Rro8ci0qM", "1825ede031e495da"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#d63384",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${nunito.className} ${dancingScript.className}`}>
        <CursorStars />
        <Sidebar />
        <HomeButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
