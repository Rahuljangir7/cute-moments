import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Cute Moments | Romantic App for Couples",
  description:
    "Cute Moments is a romantic app for couples to build a love story online with virtual hugs, love letters, countdowns, and shared memories.",
  keywords: [
    "romantic app for couples",
    "cute relationship app",
    "love story app",
    "couple app online",
  ],
};

export default function Page() {
  return <HomePage />;
}
