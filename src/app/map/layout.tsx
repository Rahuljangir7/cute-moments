import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Love Map | Love Map Online",
  description:
    "Trace your relationship timeline with a love map online and celebrate your couple memories.",
  keywords: [
    "love map online",
    "relationship timeline",
    "couple memories map",
    "our love story map",
  ],
};

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}