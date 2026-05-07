import type { Metadata } from "next";
import LoveCalculator from "./LoveCalculator";

export const metadata: Metadata = {
  title: "Love Calculator | Love Calculator Online",
  description:
    "Check your couple compatibility and love percentage with our fun love calculator online.",
  keywords: [
    "love calculator online",
    "love percentage calculator",
    "couple compatibility test",
    "love match calculator",
  ],
};

export default function LoveCalculatorPage() {
  return <LoveCalculator />;
}
