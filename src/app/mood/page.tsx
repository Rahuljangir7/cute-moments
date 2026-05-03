"use client";

import { useState } from "react";
import Image from "next/image";

const moods = [
  { name: "Happy", image: "/photos/mood_happy.png", color: "#ffeb3b" },
  { name: "Romantic", image: "/photos/mood_romantic.png", color: "#e91e63" },
  { name: "Playful", image: "/photos/mood_playful.png", color: "#ff9800" },
  { name: "Sleepy", image: "/photos/mood_sleepy.png", color: "#3f51b5" },
  { name: "Miss You", image: "/photos/mood_miss_you.png", color: "#9c27b0" },
  { name: "Excited", image: "/photos/mood_excited.png", color: "#f44336" },
];

const MoodHeart = () => {
  const [selectedMood, setSelectedMood] = useState(moods[1]);

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-mood-container">
        <h1 className="cm-timeline-title">Mood Heart 💖</h1>
        <p className="cm-timeline-subtitle">How are you feeling right now? Let me know!</p>
        

        <div 
          className="cm-mood-display-wrapper"
          style={{ 
            borderColor: selectedMood.color,
            boxShadow: `0 15px 45px ${selectedMood.color}40`
          }}
        >
          <Image 
            src={selectedMood.image} 
            alt={selectedMood.name} 
            className="cm-main-mood-img"
            width={300}
            height={300}
            key={selectedMood.name} 
          />
          <div 
            className="cm-mood-glow" 
            style={{ background: `radial-gradient(circle, ${selectedMood.color}20 0%, transparent 70%)` }}
          ></div>
        </div>

        <div className="cm-mood-options">
          {moods.map((mood) => (
            <button
              key={mood.name}
              className={`cm-mood-btn ${selectedMood.name === mood.name ? "cm-selected" : ""}`}
              onClick={() => setSelectedMood(mood)}
            >
              <div className="cm-mood-btn-img-wrapper">
                <Image src={mood.image} alt={mood.name} className="cm-mood-btn-img" width={60} height={60} />
              </div>
              <p>{mood.name}</p>
            </button>
          ))}
        </div>

        <div className="cm-music-note" style={{ marginTop: '40px' }}>
          <p>💡 Change the heart color to match your current mood!</p>
        </div>
      </div>
    </>
  );
};

export default MoodHeart;
