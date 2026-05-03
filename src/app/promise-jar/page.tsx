"use client";

import { useState } from "react";

// SVG Icons
const JarIcon = () => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 4v16h10V4H7z" stroke="#d63384" strokeWidth="2" fill="none" />
    <path d="M7 4l2-2h6l2 2" stroke="#d63384" strokeWidth="2" fill="none" />
    <path
      d="M9 8h6M9 12h6M9 16h4"
      stroke="#ff6b9d"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const PromiseIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      fill="#4caf50"
    />
  </svg>
);

const promises = [
  {
    id: 1,
    text: "I promise to always make you smile, even on your toughest days.",
    icon: "😊",
  },
  {
    id: 2,
    text: "I promise to be your biggest supporter in all your dreams.",
    icon: "🌟",
  },
  {
    id: 3,
    text: "I promise to listen, understand, and never judge.",
    icon: "👂",
  },
  {
    id: 4,
    text: "I promise to bring you coffee/tea exactly how you like it.",
    icon: "☕",
  },
  {
    id: 5,
    text: "I promise to give you the best hugs when you need them.",
    icon: "🤗",
  },
  {
    id: 6,
    text: "I promise to remember all the little things you love.",
    icon: "💝",
  },
  { id: 7, text: "I promise to adventure with you, near and far.", icon: "✈️" },
  { id: 8, text: "I promise to be your safe place, always.", icon: "🏠" },
  {
    id: 9,
    text: "I promise to laugh at your jokes, even the bad ones.",
    icon: "😄",
  },
  { id: 10, text: "I promise to love you more every single day.", icon: "❤️" },
  {
    id: 11,
    text: "I promise to hold your hand through every storm.",
    icon: "🌈",
  },
  {
    id: 12,
    text: "I promise to be yours, completely and forever.",
    icon: "💍",
  },
];

function PromiseJar() {
  const [cmCurrentPromise, setCmCurrentPromise] = useState<
    (typeof promises)[0] | null
  >(null);
  const [cmIsOpening, setCmIsOpening] = useState(false);
  const [cmUsedPromises, setCmUsedPromises] = useState<number[]>([]);

  const cmHandlePickPromise = (): void => {
    setCmIsOpening(true);

    setTimeout(() => {
      const cmAvailablePromises = promises.filter(
        (p) => !cmUsedPromises.includes(p.id),
      );

      if (cmAvailablePromises.length === 0) {
        setCmUsedPromises([]);
        const cmRandomPromise =
          promises[Math.floor(Math.random() * promises.length)];
        setCmCurrentPromise(cmRandomPromise);
        setCmUsedPromises([cmRandomPromise.id]);
      } else {
        const cmRandomPromise =
          cmAvailablePromises[
            Math.floor(Math.random() * cmAvailablePromises.length)
          ];
        setCmCurrentPromise(cmRandomPromise);
        setCmUsedPromises((prev) => [...prev, cmRandomPromise.id]);
      }

      setCmIsOpening(false);
    }, 800);
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-jar-container">
        <div className="cm-jar-header">
          <JarIcon />
          <h1 className="cm-jar-title">Promise Jar</h1>
          <p className="cm-jar-subtitle">Pick a promise I made to you 💌</p>
        </div>

        <div className="cm-jar-display">
          {!cmCurrentPromise ? (
            <div
              className={`cm-jar-closed ${cmIsOpening ? "cm-shaking" : ""}`}
              onClick={cmHandlePickPromise}
            >
              <div className="cm-jar-visual">
                <JarIcon />
                <div className="cm-jar-hearts">
                  <span>💕</span>
                  <span>💖</span>
                  <span>💗</span>
                </div>
              </div>
              <p className="cm-jar-tap">Tap the jar to pick a promise!</p>
            </div>
          ) : (
            <div className="cm-promise-revealed">
              <div className="cm-promise-card">
                <div className="cm-promise-icon">{cmCurrentPromise.icon}</div>
                <div className="cm-promise-check">
                  <PromiseIcon />
                </div>
                <p className="cm-promise-text">{cmCurrentPromise.text}</p>
              </div>
              <div className="cm-promise-actions">
                <button
                  className="cm-promise-pick-btn"
                  onClick={cmHandlePickPromise}
                >
                  🎲 Pick Another
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PromiseJar;
