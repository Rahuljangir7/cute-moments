import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliment | Daily Compliments for Couples",
  description:
    "Brighten your partner's day with daily compliments for couples, romantic messages, and sweet love notes.",
  keywords: [
    "daily compliments for couples",
    "romantic compliments",
    "love messages",
    "sweet compliments",
  ],
};

export default function ComplimentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}