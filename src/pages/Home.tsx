import { useRef, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const gifStages = [
  "/gifs/stage-0.gif",
  "/gifs/stage-1.gif",
  "/gifs/stage-2.gif",
  "/gifs/stage-3.gif",
  "/gifs/stage-4.gif",
  "/gifs/stage-5.gif",
  "/gifs/stage-6.gif",
  "/gifs/stage-6.gif", // Using stage-6 as backup for stage-7
];

const noMessages = [
  "No",
  "Are you positive? 🤔",
  "Pookie please... 🥺",
  "If you say no, I will be really sad...",
  "I will be very sad... 😢",
  "Please??? 💔",
  "Don't do this to me...",
  "Last chance! 😭",
  "You can't catch me anyway 😜",
];

const yesTeasePokes = [
  "try saying no first... I bet you want to know what happens 😏",
  "go on, hit no... just once 👀",
  "you're missing out 😈",
  "click no, I dare you 😏",
];

function Home(): JSX.Element {
  const navigate = useNavigate();
  const cmNoButtonRef = useRef<HTMLButtonElement>(null);
  const cmMusicRef = useRef<HTMLAudioElement>(null);

  const [cmGifStageIndex, setCmGifStageIndex] = useState(0);
  const [cmNoClickCounter, setCmNoClickCounter] = useState(0);
  const [cmYesTeaseCounter, setCmYesTeaseCounter] = useState(0);
  const [cmRunawayMode, setCmRunawayMode] = useState(false);
  const [cmMusicActive, setCmMusicActive] = useState(false);
  const [cmTeaseDisplayText, setCmTeaseDisplayText] = useState("");
  const [cmShowTeaseToast, setCmShowTeaseToast] = useState(false);
  const [cmYesBtnScale, setCmYesBtnScale] = useState(1.6);
  const [cmYesBtnPad, setCmYesBtnPad] = useState({ y: 18, x: 45 });
  const [cmNoBtnScale, setCmNoBtnScale] = useState(1);

  useEffect(() => {
    const cmAudio = cmMusicRef.current;
    if (!cmAudio) return;

    cmAudio.volume = 0.3;

    const cmTryAutoplay = async () => {
      try {
        cmAudio.muted = true;
        await cmAudio.play();
        cmAudio.muted = false;
        setCmMusicActive(true);
      } catch {
        const cmStartMusic = () => {
          cmAudio.muted = false;
          cmAudio
            .play()
            .then(() => {
              setCmMusicActive(true);
            })
            .catch(() => {});
        };

        document.addEventListener("click", cmStartMusic, { once: true });
      }
    };

    cmTryAutoplay();
  }, []);

  const cmToggleAudio = useCallback(() => {
    const cmAudio = cmMusicRef.current;
    if (!cmAudio) return;
    if (cmMusicActive) {
      cmAudio.pause();
      setCmMusicActive(false);
    } else {
      cmAudio.muted = false;
      cmAudio.play().catch(() => {});
      setCmMusicActive(true);
    }
  }, [cmMusicActive]);

  const cmDisplayTease = useCallback((msg: string) => {
    setCmTeaseDisplayText(msg);
    setCmShowTeaseToast(true);
    setTimeout(() => setCmShowTeaseToast(false), 2500);
  }, []);

  const cmHandleAcceptClick = useCallback(() => {
    if (!cmRunawayMode) {
      const cmMsg =
        yesTeasePokes[Math.min(cmYesTeaseCounter, yesTeasePokes.length - 1)];
      setCmYesTeaseCounter((p) => p + 1);
      cmDisplayTease(cmMsg);
      return;
    }
    navigate("/yes");
  }, [cmRunawayMode, cmYesTeaseCounter, navigate, cmDisplayTease]);

  const cmEvadeButton = useCallback(() => {
    if (!cmNoButtonRef.current) return;
    const cmBtn = cmNoButtonRef.current;
    const cmMargin = 20;
    const cmMaxX = window.innerWidth - cmBtn.offsetWidth - cmMargin;
    const cmMaxY = window.innerHeight - cmBtn.offsetHeight - cmMargin;
    cmBtn.style.position = "fixed";
    cmBtn.style.left = `${Math.random() * cmMaxX + cmMargin / 2}px`;
    cmBtn.style.top = `${Math.random() * cmMaxY + cmMargin / 2}px`;
    cmBtn.style.zIndex = "50";
  }, []);

  const cmHandleRejectClick = useCallback(() => {
    const cmNewCount = cmNoClickCounter + 1;
    setCmNoClickCounter(cmNewCount);
    setCmGifStageIndex(Math.min(cmNewCount, gifStages.length - 1));
    setCmYesBtnScale((p) => p * 1.35);
    setCmYesBtnPad((p) => ({
      y: Math.min(p.y + 5, 60),
      x: Math.min(p.x + 10, 120),
    }));
    if (cmNewCount >= 2) setCmNoBtnScale((p) => Math.max(p * 0.85, 0.6));
    if (cmNewCount >= 5 && !cmRunawayMode) setCmRunawayMode(true);
  }, [cmNoClickCounter, cmRunawayMode]);

  const cmRejectBtnText =
    noMessages[Math.min(cmNoClickCounter, noMessages.length - 1)];

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container">
        <h1 className="cm-valentine-title">Will you be my Valentine? 💕</h1>
        <div className="cm-gif-container">
          <img
            id="cm-cat-gif"
            src={gifStages[cmGifStageIndex]}
            alt="cute character"
          />
        </div>
        <div className="cm-buttons">
          <button
            id="cm-yes-btn"
            onClick={cmHandleAcceptClick}
            style={{
              fontSize: `${cmYesBtnScale}rem`,
              padding: `${cmYesBtnPad.y}px ${cmYesBtnPad.x}px`,
            }}
          >
            Yes
          </button>
          <button
            id="cm-no-btn"
            ref={cmNoButtonRef}
            onClick={cmHandleRejectClick}
            onMouseEnter={cmRunawayMode ? cmEvadeButton : undefined}
            style={{ fontSize: `${cmNoBtnScale}rem` }}
          >
            {cmRejectBtnText}
          </button>
        </div>
        <div id="cm-tease-toast" className={cmShowTeaseToast ? "cm-show" : ""}>
          {cmTeaseDisplayText}
        </div>
      </div>
      <audio id="cm-bg-music" loop ref={cmMusicRef}>
        <source
          src="/music/beabadoobee - Glue Song (Lyrics).mp3"
          type="audio/mpeg"
        />
      </audio>
      <button id="cm-music-toggle" onClick={cmToggleAudio} title="Toggle music">
        {cmMusicActive ? "🔊" : "🔇"}
      </button>
    </>
  );
}

export default Home;
