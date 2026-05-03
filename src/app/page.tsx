"use client";

import { useRouter } from "next/navigation";

function Landing() {
  const router = useRouter();

  const cmNavigateToProposal = () => {
    router.push("/proposal");
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-landing-container">
        <h1 className="cm-landing-title">Welcome 💕</h1>
        <p className="cm-landing-subtitle">
          I have something special for you...
        </p>

        {/* Feature Navigation Buttons */}
        <div className="cm-features-section">
          <p className="cm-features-label">✨ Explore More Cute Moments ✨</p>
          <div className="cm-features-grid">
            <button
              className="cm-feature-btn cm-feature-main"
              onClick={cmNavigateToProposal}
            >
              💝 Valentine&apos;s Day
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => router.push("/love-calculator")}
            >
              💕 Love Calculator
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => router.push("/love-letter")}
            >
              💌 Love Letter
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => router.push("/countdown")}
            >
              ⏰ Countdown
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => router.push("/gallery")}
            >
              📸 Photo Gallery
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => router.push("/promise-jar")}
            >
              🫙 Promise Jar
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => router.push("/quiz")}
            >
              🎯 Compatibility Quiz
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => router.push("/music")}
            >
              🎵 Music Player
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => router.push("/map")}
            >
              🗺️ Love Map
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => router.push("/scrapbook")}
            >
              📖 Scrapbook
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => router.push("/hug")}
            >
              🤗 Virtual Hug
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => router.push("/compliment")}
            >
              💖 Daily Compliment
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => router.push("/mood")}
            >
              🌈 Mood Heart
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => router.push("/secret")}
            >
              🔐 Secret Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
