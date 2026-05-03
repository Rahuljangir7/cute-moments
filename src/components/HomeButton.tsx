"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeButton = () => {
  const pathname = usePathname();

  // Don't show on Landing page
  if (pathname === "/") return null;

  return (
    <div className="cm-home-nav">
      <Link href="/" className="cm-home-btn" title="Back to Home">
        🏠
      </Link>
    </div>
  );
};

export default HomeButton;
