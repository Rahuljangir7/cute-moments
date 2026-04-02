// SVG Icons
const MapIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.5 3l-6 2-6-2-5.5 2v15l6-2 6 2 5.5-2V3z"
      stroke="#d63384"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="12" cy="10" r="3" fill="#ff6b9d" />
    <path d="M12 13v8" stroke="#d63384" strokeWidth="2" />
  </svg>
);

const PinIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      fill="#d63384"
    />
  </svg>
);

const locations = [
  {
    id: 1,
    name: "Where We First Met",
    description: "The place where our story began ✨",
    x: 30,
    y: 40,
    emoji: "💫",
  },
  {
    id: 2,
    name: "First Date Spot",
    description: "Where sparks first flew 💕",
    x: 60,
    y: 30,
    emoji: "🌹",
  },
  {
    id: 3,
    name: "Our Favorite Cafe",
    description: "Countless coffee dates ☕",
    x: 45,
    y: 60,
    emoji: "☕",
  },
  {
    id: 4,
    name: "The Proposal",
    description: "Where you said YES! 💍",
    x: 70,
    y: 50,
    emoji: "💍",
  },
  {
    id: 5,
    name: "Future Home",
    description: "Where we'll build our life together 🏠",
    x: 50,
    y: 75,
    emoji: "🏠",
  },
];

function LoveMap(): JSX.Element {
  const cmHandlePinClick = (locationId: number): void => {
    const location = locations.find((l) => l.id === locationId);
    if (location) {
      alert(
        `${location.name}\n\n${location.description}\n\nAdd a photo or memory here!`,
      );
    }
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-map-container">
        <div className="cm-map-header">
          <MapIcon />
          <h1 className="cm-map-title">Our Love Map</h1>
          <p className="cm-map-subtitle">Places that mean the world to us 🗺️</p>
        </div>

        <div className="cm-map-display">
          <div className="cm-map-background">
            {/* Abstract map background */}
            <svg viewBox="0 0 100 100" className="cm-map-svg">
              {/* Decorative paths */}
              <path
                d="M10 20 Q30 10 50 25 T90 20"
                stroke="#ffb3c1"
                strokeWidth="0.5"
                fill="none"
                opacity="0.5"
              />
              <path
                d="M10 50 Q40 40 60 55 T90 50"
                stroke="#ffb3c1"
                strokeWidth="0.5"
                fill="none"
                opacity="0.5"
              />
              <path
                d="M10 80 Q35 70 55 85 T90 80"
                stroke="#ffb3c1"
                strokeWidth="0.5"
                fill="none"
                opacity="0.5"
              />

              {/* Decorative dots */}
              <circle cx="20" cy="30" r="1" fill="#ff6b9d" opacity="0.3" />
              <circle cx="80" cy="40" r="1" fill="#ff6b9d" opacity="0.3" />
              <circle cx="35" cy="70" r="1" fill="#ff6b9d" opacity="0.3" />
              <circle cx="75" cy="75" r="1" fill="#ff6b9d" opacity="0.3" />
            </svg>

            {/* Location pins */}
            {locations.map((location) => (
              <div
                key={location.id}
                className="cm-map-pin"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                onClick={() => cmHandlePinClick(location.id)}
              >
                <div className="cm-pin-bounce">
                  <PinIcon />
                </div>
                <div className="cm-pin-label">
                  <span className="cm-pin-emoji">{location.emoji}</span>
                  <span className="cm-pin-name">{location.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="cm-map-legend">
            {locations.map((location) => (
              <div key={location.id} className="cm-legend-item">
                <span className="cm-legend-emoji">{location.emoji}</span>
                <span className="cm-legend-name">{location.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cm-map-note">
          <p>
            💡 Click on pins to see memories. Add real coordinates and photos to
            make it your own!
          </p>
        </div>
      </div>
    </>
  );
}

export default LoveMap;
