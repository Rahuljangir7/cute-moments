import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secret Code | Secret Love Code",
  description:
    "Create a secret love code and send couple secret messages with a romantic cipher experience.",
  keywords: [
    "secret love code",
    "couple secret messages",
    "love ciphers",
    "romantic secret code",
  ],
};

export default function SecretMessageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}