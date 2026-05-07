import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scrapbook | Digital Scrapbook for Couples",
  description:
    "Collect your memories in a digital scrapbook for couples and keep your love story alive.",
  keywords: [
    "digital scrapbook for couples",
    "online scrapbook",
    "couple memory book",
    "digital love scrapbook",
  ],
};

export default function ScrapbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}