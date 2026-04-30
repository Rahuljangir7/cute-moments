import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

function Landing(): JSX.Element {
  const navigate = useNavigate();

  const cmNavigateToProposal = (): void => {
    navigate("/proposal");
  };

  return (
    <>
      <SEO 
        title="Welcome" 
        description="A special place for our cute moments. Explore our interactive features like virtual hugs, love letters, and shared memories."
        keywords="romantic moments, love app, relationship memories, virtual scrapbook, virtual hug"
      />
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
              💝 Valentine's Day
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => navigate("/love-calculator")}
            >
              💕 Love Calculator
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => navigate("/love-letter")}
            >
              💌 Love Letter
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => navigate("/countdown")}
            >
              ⏰ Countdown
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => navigate("/gallery")}
            >
              📸 Photo Gallery
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => navigate("/promise-jar")}
            >
              🫙 Promise Jar
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => navigate("/quiz")}
            >
              🎯 Compatibility Quiz
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => navigate("/music")}
            >
              🎵 Music Player
            </button>
            <button className="cm-feature-btn" onClick={() => navigate("/map")}>
              🗺️ Love Map
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => navigate("/scrapbook")}
            >
              📖 Scrapbook
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => navigate("/hug")}
            >
              🤗 Virtual Hug
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => navigate("/compliment")}
            >
              💖 Daily Compliment
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => navigate("/mood")}
            >
              🌈 Mood Heart
            </button>
            <button
              className="cm-feature-btn"
              onClick={() => navigate("/secret")}
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
