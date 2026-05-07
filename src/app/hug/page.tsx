import type { Metadata } from "next";
import VirtualHug from "./VirtualHug";

export const metadata: Metadata = {
  title: "Virtual Hug | Virtual Hug Online",
  description:
    "Send a virtual hug online and feel close to your partner even when you’re apart.",
  keywords: [
    "virtual hug online",
    "send virtual hug",
    "long distance hug",
    "romantic hug online",
  ],
};

export default function HugPage() {
  return <VirtualHug />;
}
