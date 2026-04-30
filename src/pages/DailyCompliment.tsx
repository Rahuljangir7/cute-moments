import { useState, useEffect } from "react";

const compliments = [
  "You're the most beautiful person I know, inside and out. ✨",
  "Your laugh is my absolute favorite sound in the world. 🎵",
  "The way you handle challenges with grace inspires me every day. 💪",
  "You have the kindest heart I've ever encountered. ❤️",
  "Every moment spent with you is a moment I treasure. ⏳",
  "You're not just my partner, you're my best friend and my home. 🏠",
  "Your intelligence and wit always keep me on my toes. 🧠",
  "I love the way your eyes sparkle when you're excited about something. ✨",
  "You make the world a better place just by being in it. 🌎",
  "Your presence is like a warm ray of sunshine on a cloudy day. ☀️",
  "I'm so incredibly proud of everything you are and everything you do. 🎖️",
  "Thinking of you is the easiest thing I do all day. 💭",
  "You are my favorite reason to smile. 😊",
  "The world is lucky to have you, and I'm the luckiest of all. 🍀",
  "I love you more than words could ever express. 💌"
];

const DailyCompliment = () => {
  const [compliment, setCompliment] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const getNewCompliment = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * compliments.length);
      setCompliment(compliments[randomIndex]);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    getNewCompliment();
  }, []);

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-compliment-container">
        <h1 className="cm-timeline-title">Daily Compliment 💖</h1>
        <p className="cm-timeline-subtitle">Just a little reminder of how amazing you are...</p>
        
        <div className={`cm-compliment-card ${isAnimating ? 'cm-fade-out' : 'cm-fade-in'}`}>
          <p className="cm-compliment-text">{compliment}</p>
          <div className="cm-card-sparkles">✨ ✨ ✨</div>
        </div>

        <button className="cm-compliment-btn" onClick={getNewCompliment}>
          Get Another Compliment
        </button>

        <style>{`
          .cm-fade-out { opacity: 0; transform: scale(0.9); transition: all 0.5s; }
          .cm-fade-in { opacity: 1; transform: scale(1); transition: all 0.5s; }
          .cm-card-sparkles {
            position: absolute;
            bottom: 15px;
            right: 20px;
            font-size: 1.2rem;
            opacity: 0.5;
          }
        `}</style>
      </div>
    </>
  );
};

export default DailyCompliment;
