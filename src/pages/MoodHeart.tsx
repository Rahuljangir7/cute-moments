import { useState } from "react";

const moods = [
  { name: "Happy", emoji: "😊", color: "#ffeb3b" },
  { name: "Romantic", emoji: "🥰", color: "#e91e63" },
  { name: "Playful", emoji: "😜", color: "#ff9800" },
  { name: "Sleepy", emoji: "😴", color: "#3f51b5" },
  { name: "Miss You", emoji: "🥺", color: "#9c27b0" },
  { name: "Excited", emoji: "🤩", color: "#f44336" },
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
          className="cm-mood-heart"
          style={{ 
            color: selectedMood.color,
            textShadow: `0 0 30px ${selectedMood.color}80`
          }}
        >
          ❤️
          <div style={{ fontSize: '2rem', marginTop: '-30px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            {selectedMood.emoji}
          </div>
        </div>

        <div className="cm-mood-options">
          {moods.map((mood) => (
            <button
              key={mood.name}
              className={`cm-mood-btn ${selectedMood.name === mood.name ? "cm-selected" : ""}`}
              onClick={() => setSelectedMood(mood)}
            >
              <span>{mood.emoji}</span>
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
