import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposal | Valentine Proposal Online",
  description:
    "Make your proposal unforgettable with a romantic valentine proposal online on Cute Moments.",
  keywords: [
    "valentine proposal online",
    "will you be my valentine",
    "proposal ideas",
    "cute proposal",
    "romantic proposal website",
  ],
};

export default function ProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}