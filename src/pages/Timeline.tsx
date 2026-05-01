import { useState } from "react";
import SEO from "../components/SEO";

interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  emoji: string;
  image: string;
}

const memories: Memory[] = [
  {
    id: 1,
    date: "The Spark 💫",
    title: "Our First Encounter",
    description: "That magical walk under the cherry blossoms where it all began...",
    emoji: "✨",
    image: "/photos/cherry_blossom_walk.png"
  },
  {
    id: 2,
    date: "Sweet Beginnings 🌹",
    title: "First Coffee Date",
    description: "Nervous smiles and warm coffee. The morning I knew you were special...",
    emoji: "☕",
    image: "/photos/cafe_morning.png"
  },
  {
    id: 3,
    date: "Ocean Breeze ✈️",
    title: "Golden Hour at the Beach",
    description: "Walking hand in hand as the sun dipped below the horizon...",
    emoji: "🌊",
    image: "/photos/beach_sunset.png"
  },
  {
    id: 4,
    date: "Starry Nights 💕",
    title: "Gazing at the Universe",
    description: "Lying on the grass, talking about life and looking at the stars...",
    emoji: "🌟",
    image: "/photos/stargazing_hill.png"
  },
  {
    id: 5,
    date: "Today & Forever 💍",
    title: "The Perfect Proposal",
    description: "The moment you made me the luckiest person in the world!",
    emoji: "💝",
    image: "/photos/baking_together.png"
  },
];

function Timeline(): JSX.Element {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);

  const cmHandleViewPhotos = (memoryId: number): void => {
    setSelectedMemory(selectedMemory === memoryId ? null : memoryId);
  };

  return (
    <>
      <SEO 
        title="Our Love Timeline" 
        description="A beautiful chronological journey through our most precious memories. From the first encounter to the perfect proposal."
        keywords="love timeline, relationship history, romantic memories, love story timeline"
      />
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
                
                {selectedMemory === cmMemory.id && (
                   <div className="cm-timeline-photo-container">
                     <img src={cmMemory.image} alt={cmMemory.title} className="cm-timeline-img" />
                   </div>
                )}

                <button
                  className="cm-timeline-photo-btn"
                  onClick={() => cmHandleViewPhotos(cmMemory.id)}
                >
                  {selectedMemory === cmMemory.id ? "Hide Photo" : "📸 View Photo"}
                </button>
              </div>
              <div className="cm-timeline-dot"></div>
            </div>
          ))}
        </div>

        <style>{`
          .cm-timeline-photo-container {
            margin: 15px 0;
            border-radius: 15px;
            overflow: hidden;
            animation: fadeIn 0.5s ease;
          }
          .cm-timeline-img {
            width: 100%;
            height: auto;
            display: block;
          }
        `}</style>
      </div>
    </>
  );
}

export default Timeline;
