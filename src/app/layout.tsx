import type { Metadata, Viewport } from "next";
import { Nunito, Dancing_Script } from "next/font/google";
import "./globals.css";
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

export const metadata: Metadata = {
  title: "Cute Moments | A Romantic Experience",
  description:
    "Cute Moments is the ultimate romantic experience for couples. Send virtual hugs, create beautiful digital scrapbooks, write emotional love letters, and cherish your relationship memories with interactive features.",
  keywords:
    "romantic moments, cute relationship app, virtual hug for girlfriend, virtual hug for boyfriend, romantic scrapbook, love calculator, couple memories, valentine surprise, romantic gift ideas, relationship app",
  verification: {
    google: ["yXQivvAEj4qUbISTD9AMVhyAPkVPkZbiU4Rro8ci0qM", "1825ede031e495da"],
  },
};

export const viewport: Viewport = {
  themeColor: "#d63384",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
