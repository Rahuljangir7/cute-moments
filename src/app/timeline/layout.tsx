import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline | Our Love Story | Cute Moments",
  description:
    "Explore your romantic timeline page and relive the special moments that made your love story unforgettable.",
  keywords: [
    "relationship timeline",
    "love story map",
    "couple memory timeline",
  ],
  alternates: {
    canonical: "https://cute-moments.vercel.app/timeline",
  },
};

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}