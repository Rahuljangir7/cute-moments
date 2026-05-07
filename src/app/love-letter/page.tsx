import type { Metadata } from "next";
import LoveLetter from "./LoveLetter";

export const metadata: Metadata = {
  title: "Love Letter | Love Letter Online",
  description:
    "Write and send a romantic love letter online with Cute Moments’ virtual love letter generator.",
  keywords: [
    "love letter online",
    "write love letter",
    "romantic love letter",
    "love letter generator",
    "virtual love letter",
  ],
};

export default function LoveLetterPage() {
  return <LoveLetter />;
}
