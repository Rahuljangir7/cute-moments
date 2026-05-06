"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { path: "/", label: "🏠 Home" },
  { path: "/proposal", label: "💝 Proposal" },
  { path: "/love-calculator", label: "💕 Calculator" },
  { path: "/love-letter", label: "💌 Letter" },
  { path: "/countdown", label: "⏰ Countdown" },
  { path: "/gallery", label: "📸 Gallery" },
  { path: "/promise-jar", label: "🫙 Promise Jar" },
  { path: "/quiz", label: "🎯 Quiz" },
  { path: "/music", label: "🎵 Music" },
  { path: "/map", label: "🗺️ Love Map" },
  { path: "/scrapbook", label: "📖 Scrapbook" },
  { path: "/hug", label: "🫂 Virtual Hug" },
  { path: "/compliment", label: "💖 Compliment" },
  { path: "/mood", label: "🌈 Mood Heart" },
  { path: "/secret", label: "🔐 Secret Code" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`cm-menu-btn ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        <div className="cm-menu-bar"></div>
        <div className="cm-menu-bar"></div>
        <div className="cm-menu-bar"></div>
      </button>

      {/* Sidebar Overlay */}
      <div
        className={`cm-sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar Menu */}
      <nav className={`cm-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cm-sidebar-header">
          <div className="flex flex-col items-center gap-2 mb-4 w-full">
            <img src="/logo.png" alt="Cute Moments Logo" className="w-16 h-16 rounded-full shadow-md border-2 border-pink-100" />
            <h2 className="text-[#d63384] font-bold">Cute Moments</h2>
          </div>
          <button className="cm-close-sidebar absolute top-4 right-4" onClick={toggleSidebar}>
            ✕
          </button>
        </div>
        <ul className="cm-sidebar-links">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`cm-sidebar-link ${pathname === item.path ? "active" : ""}`}
                onClick={toggleSidebar}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
