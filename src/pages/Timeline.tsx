interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  emoji: string;
}

const memories: Memory[] = [
  {
    id: 1,
    date: "First Meet 💫",
    title: "The Day Our Eyes Met",
    description: "That magical moment when we first saw each other...",
    emoji: "✨",
  },
  {
    id: 2,
    date: "First Date 🌹",
    title: "Our First Adventure Together",
    description: "Nervous smiles, endless talks, and the beginning of us...",
    emoji: "🌸",
  },
  {
    id: 3,
    date: "First Trip ✈️",
    title: "Exploring The World Together",
    description: "New places, new memories, same amazing company...",
    emoji: "🗺️",
  },
  {
    id: 4,
    date: "Special Moments 💕",
    title: "Countless Beautiful Memories",
    description: "Every laugh, every hug, every moment spent together...",
    emoji: "💖",
  },
  {
    id: 5,
    date: "Today & Forever 💍",
    title: "You Said YES!",
    description: "The beginning of our forever...",
    emoji: "💝",
  },
];

function Timeline(): JSX.Element {
  const cmHandleViewPhotos = (memoryId: number): void => {
    // Placeholder for photo viewing functionality
    alert(
      `View photos for memory ${memoryId} - Add your photos to public/photos/ folder!`,
    );
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-timeline-container">
        <h1 className="cm-timeline-title">Our Love Story 💕</h1>
        <p className="cm-timeline-subtitle">
          Every moment with you is precious...
        </p>

        <div className="cm-timeline">
          {memories.map((cmMemory, cmIndex) => (
            <div
              key={cmMemory.id}
              className={`cm-timeline-item ${cmIndex % 2 === 0 ? "cm-left" : "cm-right"}`}
            >
              <div className="cm-timeline-content">
                <div className="cm-timeline-emoji">{cmMemory.emoji}</div>
                <div className="cm-timeline-date">{cmMemory.date}</div>
                <h3 className="cm-timeline-heading">{cmMemory.title}</h3>
                <p className="cm-timeline-desc">{cmMemory.description}</p>
                <button
                  className="cm-timeline-photo-btn"
                  onClick={() => cmHandleViewPhotos(cmMemory.id)}
                >
                  📸 View Photos
                </button>
              </div>
              <div className="cm-timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Timeline;
