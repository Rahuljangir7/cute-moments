import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music | Romantic Playlist Online",
  description:
    "Play a romantic playlist online with love songs and a couple music player for cozy moments.",
  keywords: [
    "romantic playlist online",
    "love songs",
    "couple music player",
    "romantic music for couples",
  ],
};

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}