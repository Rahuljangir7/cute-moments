import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz | Couple Quiz Online",
  description:
    "Take a relationship quiz online and discover how well your love story matches.",
  keywords: [
    "couple quiz online",
    "relationship quiz",
    "love compatibility quiz",
    "couple questions",
  ],
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}