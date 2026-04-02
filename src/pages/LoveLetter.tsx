import { useState, useEffect } from "react";

// SVG Icons
const EnvelopeIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      fill="#d63384"
    />
    <path d="M12 11l8-5H4l8 5z" fill="#ff6b9d" opacity="0.3" />
  </svg>
);

const LetterIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
      fill="#ff6b9d"
    />
  </svg>
);

const letterContent = [
  "My Dearest Love,",
  "",
  "Every moment with you feels like a beautiful dream...",
  "",
  "Your smile brightens my darkest days,",
  "Your laughter is my favorite melody,",
  "Your presence makes everything better.",
  "",
  "I promise to cherish you,",
  "To support your dreams,",
  "To be your safe haven,",
  "And to love you more each day.",
  "",
  "You are my today and all of my tomorrows.",
  "",
  "Forever Yours,",
  "❤️",
];

function LoveLetter(): JSX.Element {
  const [cmIsOpen, setCmIsOpen] = useState(false);
  const [cmDisplayedLines, setCmDisplayedLines] = useState<string[]>([]);
  const [cmCurrentLine, setCmCurrentLine] = useState(0);
  const [cmIsTyping, setCmIsTyping] = useState(false);

  useEffect(() => {
    if (cmIsOpen && cmCurrentLine < letterContent.length) {
      setCmIsTyping(true);
      const timer = setTimeout(() => {
        setCmDisplayedLines((prev) => [...prev, letterContent[cmCurrentLine]]);
        setCmCurrentLine((prev) => prev + 1);
        setCmIsTyping(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [cmIsOpen, cmCurrentLine]);

  const cmHandleOpen = (): void => {
    setCmIsOpen(true);
  };

  const cmHandleReset = (): void => {
    setCmIsOpen(false);
    setCmDisplayedLines([]);
    setCmCurrentLine(0);
    setCmIsTyping(false);
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-letter-container">
        <h1 className="cm-letter-title">
          <LetterIcon /> Virtual Love Letter <LetterIcon />
        </h1>
        <p className="cm-letter-subtitle">
          A special message just for you... 💌
        </p>

        {!cmIsOpen ? (
          <div className="cm-letter-sealed">
            <div className="cm-envelope" onClick={cmHandleOpen}>
              <EnvelopeIcon />
              <div className="cm-seal">💕</div>
            </div>
            <p className="cm-tap-text">Tap to open your letter</p>
          </div>
        ) : (
          <div className="cm-letter-opened">
            <div className="cm-letter-paper">
              {cmDisplayedLines.map((line, index) => (
                <p
                  key={index}
                  className={`cm-letter-line ${line === "" ? "cm-empty" : ""} ${index === cmDisplayedLines.length - 1 && cmIsTyping ? "cm-typing" : ""}`}
                >
                  {line}
                </p>
              ))}
              {cmIsTyping && <span className="cm-cursor">|</span>}
            </div>

            {cmCurrentLine >= letterContent.length && (
              <div className="cm-letter-actions">
                <button
                  className="cm-letter-reopen-btn"
                  onClick={cmHandleReset}
                >
                  📨 Read Again
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default LoveLetter;
