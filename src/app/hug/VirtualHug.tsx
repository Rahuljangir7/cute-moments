"use client";

import { useState } from "react";
import Image from "next/image";

const VirtualHug = () => {
  const [hugStage, setHugStage] = useState(0);

  const handleHugClick = () => {
    if (hugStage < 3) {
      setHugStage((prev) => prev + 1);
    } else {
      setHugStage(0);
    }
  };

  const getButtonText = () => {
    switch (hugStage) {
      case 1:
        return "Wait...";
      case 2:
        return "Ouch..";
      case 3:
        return "Stop, it hurts! ❤️";
      default:
        return "Give Me a Hug!";
    }
  };

  const getMessage = () => {
    switch (hugStage) {
      case 1:
        return "Holding you tight...";
      case 2:
        return "Squeezing even harder!";
      case 3:
        return "Never letting you go! ❤️";
      default:
        return "Need a hug? I'm right here.";
    }
  };

  const getHugImage = () => {
    switch (hugStage) {
      case 1:
        return "/photos/hug_1.png";
      case 2:
        return "/photos/hug_2.png";
      case 3:
        return "/photos/hug_3.png";
      default:
        return "/photos/hug_1.png";
    }
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-hug-container">
        <h1 className="cm-timeline-title">Virtual Hug</h1>
        <p className="cm-timeline-subtitle">{getMessage()}</p>

        <div
          className={`cm-hug-wrapper stage-${hugStage}`}
          onClick={handleHugClick}
        >
          <div className="cm-hug-image-frame">
            <Image
              src={getHugImage()}
              alt="Romantic Hug"
              className="cm-hug-main-img"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              key={hugStage} // Force re-animation on image change
            />
            <div className="cm-hug-overlay-glow"></div>
          </div>
        </div>

        <div className="cm-hug-actions">
          <button
            className={`cm-hug-btn stage-${hugStage}`}
            onClick={handleHugClick}
          >
            {getButtonText()}
          </button>

          {hugStage === 3 && (
            <button
              className="cm-hug-btn cm-reset-btn"
              onClick={() => setHugStage(0)}
            >
              🔄 Reset Hug
            </button>
          )}
        </div>

        <div className="cm-music-note cm-hug-music-note">
          <p>💡 Each click makes the hug tighter and more realistic!</p>
        </div>
      </div>
    </>
  );
};

export default VirtualHug;
