import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Cute Moments Romantic Memories",
  description:
    "Browse a romantic gallery of couple moments, upload your own photos, and save your favorite date memories.",
  keywords: [
    "romantic gallery",
    "couple memories gallery",
    "relationship photo album",
  ],
  alternates: {
    canonical: "https://cute-moments.vercel.app/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}