import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yes! | Cute Moments Proposal Celebration",
  description:
    "Celebrate your romantic yes response with Cute Moments and discover the next love story feature to explore.",
  keywords: [
    "proposal celebration",
    "valentine yes page",
    "romantic surprise app",
  ],
  alternates: {
    canonical: "https://cute-moments.vercel.app/yes",
  },
};

export default function YesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}