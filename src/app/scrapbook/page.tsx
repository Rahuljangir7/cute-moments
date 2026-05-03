"use client";

import { useState } from "react";
import Image from "next/image";

// SVG Icons
const BookIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"
      fill="#d63384"
    />
  </svg>
);

const StickerIcon = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    heart: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="#ff6b9d"
        />
      </svg>
    ),
    star: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="#ffd700"
        />
      </svg>
    ),
    flower: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" fill="#ff85a2" />
      </svg>
    ),
    note: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
          fill="#9c27b0"
        />
      </svg>
    ),
  };
  return icons[type] || icons.heart;
};

const stickers = [
  { id: 1, type: "heart", name: "Love" },
  { id: 2, type: "star", name: "Special" },
  { id: 3, type: "flower", name: "Bloom" },
  { id: 4, type: "note", name: "Music" },
];

const scrapItems = [
  {
    id: 1,
    content: "Our first selfie together! 📸",
    x: 20,
    y: 20,
    rotation: -5,
    image: "/photos/cherry_blossom_walk.png"
  },
  { id: 2, content: "That amazing coffee date ☕", x: 60, y: 40, rotation: 3, image: "/photos/cafe_morning.png" },
  { id: 3, content: "When you made me laugh 😄", x: 30, y: 70, rotation: -3, image: "/photos/stargazing_hill.png" },
  {
    id: 4,
    content: "Holding hands for the first time 🤝",
    x: 70,
    y: 60,
    rotation: 5,
    image: "/photos/beach_sunset.png"
  },
];

function Scrapbook() {
  const [cmPlacedStickers, setCmPlacedStickers] = useState<
    Array<{ id: number; type: string; x: number; y: number }>
  >([]);
  const [cmSelectedSticker, setCmSelectedSticker] = useState<string | null>(
    null,
  );

  const cmHandleScrapClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (cmSelectedSticker) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setCmPlacedStickers((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: cmSelectedSticker,
          x,
          y,
        },
      ]);
      setCmSelectedSticker(null);
    }
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-scrapbook-container">
        <div className="cm-scrapbook-header">
          <BookIcon />
          <h1 className="cm-scrapbook-title">Our Digital Scrapbook</h1>
          <p className="cm-scrapbook-subtitle">
            Memories we created together 📖
          </p>
        </div>

        <div className="cm-sticker-panel">
          <p className="cm-sticker-label">
            Add stickers (click to select, then click on book):
          </p>
          <div className="cm-stickers">
            {stickers.map((sticker) => (
              <button
                key={sticker.id}
                className={`cm-sticker-btn ${cmSelectedSticker === sticker.type ? "cm-selected" : ""}`}
                onClick={() =>
                  setCmSelectedSticker(
                    cmSelectedSticker === sticker.type ? null : sticker.type,
                  )
                }
              >
                <StickerIcon type={sticker.type} />
                <span>{sticker.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="cm-scrapbook-page" onClick={cmHandleScrapClick}>
          <div className="cm-scrapbook-binding"></div>

          {scrapItems.map((item) => (
            <div
              key={item.id}
              className="cm-scrap-item"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                transform: `rotate(${item.rotation}deg)`,
              }}
            >
              <div className="cm-scrap-photo-placeholder">
                {item.image ? (
                  <Image src={item.image} alt={item.content} className="cm-scrap-img" width={150} height={150} />
                ) : (
                  <span className="cm-scrap-text">{item.content}</span>
                )}
              </div>
              <p className="cm-scrap-caption">{item.content}</p>
            </div>
          ))}

          {cmPlacedStickers.map((sticker) => (
            <div
              key={sticker.id}
              className="cm-placed-sticker"
              style={{
                left: `${sticker.x}%`,
                top: `${sticker.y}%`,
              }}
            >
              <StickerIcon type={sticker.type} />
            </div>
          ))}
        </div>

        <div className="cm-scrapbook-actions">
          <button
            className="cm-scrapbook-clear-btn"
            onClick={() => setCmPlacedStickers([])}
          >
            🗑️ Clear Stickers
          </button>
        </div>

        <div className="cm-scrapbook-note">
          <p>
            💡 Add your real photos to the scrapbook by replacing the
            placeholder content!
          </p>
        </div>
      </div>
    </>
  );
}

export default Scrapbook;
