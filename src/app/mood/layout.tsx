import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mood Heart | Mood Tracker for Couples",
  description:
    "Track your relationship mood with a couple emotion tracker and share how you are feeling together.",
  keywords: [
    "mood tracker for couples",
    "relationship mood",
    "couple emotion tracker",
  ],
};

export default function MoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}