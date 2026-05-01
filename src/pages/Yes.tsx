import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import confetti from "canvas-confetti";

function Yes(): JSX.Element {
  const navigate = useNavigate();
  const cmMusicRef = useRef<HTMLAudioElement>(null);
  const [cmAudioPlaying, setCmAudioPlaying] = useState(false);

  useEffect(() => {
    cmLaunchConfetti();

    const cmAudio = cmMusicRef.current;
    if (cmAudio) {
      cmAudio.volume = 0.3;
      cmAudio
        .play()
        .then(() => {
          setCmAudioPlaying(true);
        })
        .catch(() => {
          // Music autoplay blocked, user can manually toggle
        });
    }
  }, []);

  const cmLaunchConfetti = () => {
    const colors = [
      "#ff69b4",
      "#ff1493",
      "#ff85a2",
      "#ffb3c1",
      "#ff0000",
      "#ff6347",
      "#fff",
      "#ffdf00",
    ];
    const duration = 6000;
    const end = Date.now() + duration;

    // Initial big burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { x: 0.5, y: 0.3 },
      colors,
    });

    // Continuous side cannons
    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 40,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors,
      });

      confetti({
        particleCount: 40,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors,
      });
    }, 300);
  };

  const cmToggleAudio = useCallback(() => {
    const cmAudio = cmMusicRef.current;
    if (!cmAudio) return;

    if (cmAudioPlaying) {
      cmAudio.pause();
      setCmAudioPlaying(false);
    } else {
      cmAudio.muted = false;
      cmAudio.play().catch(() => {});
      setCmAudioPlaying(true);
    }
  }, [cmAudioPlaying]);

  const cmHandleViewTimeline = (): void => {
    navigate("/timeline");
  };

  return (
    <>
      <SEO 
        title="She Said Yes! - Celebration" 
        description="The magical moment when love was accepted. Celebrating our commitment and the beautiful journey ahead."
        keywords="proposal accepted, she said yes, valentine celebration, love victory"
      />
      <div className="cm-hearts-bg"></div>

      <div className="cm-container">
        <h1 className="cm-yes-title">Knew you would say yes! 🎉</h1>

        <div className="cm-gif-container">
          <img id="cm-cat-gif" src="/gifs/celebration.gif" alt="celebrating" />
        </div>

        <p className="cm-yes-message">
          You just made me the happiest person! 💕
        </p>

        <div className="cm-yes-actions">
          <button className="cm-timeline-nav-btn" onClick={cmHandleViewTimeline}>
            📸 View Our Memories →
          </button>
          
          <div className="cm-extra-actions">
            <button className="cm-feature-btn" onClick={() => navigate("/hug")}>
              🤗 Get a Hug
            </button>
            <button className="cm-feature-btn" onClick={() => navigate("/compliment")}>
              💖 Daily Compliment
            </button>
          </div>
        </div>
      </div>

      <audio id="cm-bg-music" loop ref={cmMusicRef}>
        <source
          src="/music/beabadoobee - Glue Song (Lyrics).mp3"
          type="audio/mpeg"
        />
      </audio>

      <button id="cm-music-toggle" onClick={cmToggleAudio} title="Toggle music">
        {cmAudioPlaying ? "🔊" : "🔇"}
      </button>
    </>
  );
}

export default Yes;
