import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promise Jar | Promise Jar for Couples",
  description:
    "Create relationship promises for couples, set couple goals, and keep your love promises online.",
  keywords: [
    "promise jar for couples",
    "relationship promises",
    "couple goals",
    "love promises online",
  ],
};

export default function PromiseJarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}