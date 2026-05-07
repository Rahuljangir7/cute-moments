import type { Metadata } from "next";
import CountdownTimer from "./CountdownTimer";

export const metadata: Metadata = {
  title: "Countdown | Love Countdown Timer",
  description:
    "Track days until your next anniversary or Valentine’s Day with a couple countdown timer.",
  keywords: [
    "love countdown timer",
    "relationship countdown",
    "couple anniversary countdown",
    "days until valentine",
  ],
};

export default function CountdownPage() {
  return <CountdownTimer />;
}
