import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet with React
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// @ts-ignore
L.Marker.prototype.options.icon = DefaultIcon;

// SVG Icons for Header
const MapIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.5 3l-6 2-6-2-5.5 2v15l6-2 6 2 5.5-2V3z" stroke="#d63384" strokeWidth="2" fill="none" />
    <circle cx="12" cy="10" r="3" fill="#ff6b9d" />
  </svg>
);

const locations = [
  {
    id: 1,
    name: "Where We First Met",
    description: "The place where our story began ✨",
    position: [28.6139, 77.2090] as [number, number], // New Delhi example
    emoji: "💫",
  },
  {
    id: 2,
    name: "First Date Spot",
    description: "Where sparks first flew 💕",
    position: [28.6324, 77.2187] as [number, number],
    emoji: "🌹",
  },
  {
    id: 3,
    name: "Our Favorite Cafe",
    description: "Countless coffee dates ☕",
    position: [28.6219, 77.2111] as [number, number],
    emoji: "☕",
  },
];

function LoveMap(): JSX.Element {
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-map-container">
        <div className="cm-map-header">
          <MapIcon />
          <h1 className="cm-map-title">Our Love Map</h1>
          <p className="cm-map-subtitle">Real places where we created memories 🗺️</p>
        </div>

        <div className="cm-map-display">
          <MapContainer 
            center={[28.6139, 77.2090]} 
            zoom={13} 
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc) => (
              <Marker 
                key={loc.id} 
                position={loc.position}
                eventHandlers={{
                  click: () => setSelectedLocation(loc),
                }}
              >
                <Popup>
                  <div style={{ textAlign: 'center' }}>
                    <h3>{loc.emoji} {loc.name}</h3>
                    <p>{loc.description}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {selectedLocation && (
            <div className="cm-location-info-card">
              <div className="cm-location-header">
                <span className="cm-location-emoji">{selectedLocation.emoji}</span>
                <h3 className="cm-location-name">{selectedLocation.name}</h3>
              </div>
              <p className="cm-location-desc">{selectedLocation.description}</p>
              <button className="cm-location-close" onClick={() => setSelectedLocation(null)}>✕</button>
            </div>
          )}

          <div className="cm-map-legend">
            {locations.map((location) => (
              <div 
                key={location.id} 
                className={`cm-legend-item ${selectedLocation?.id === location.id ? 'cm-selected' : ''}`}
                onClick={() => setSelectedLocation(location)}
                style={{ cursor: 'pointer' }}
              >
                <span className="cm-legend-emoji">{location.emoji}</span>
                <span className="cm-legend-name">{location.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cm-map-note">
          <p>
            💡 You can zoom and drag the map! Click on markers to see the special memories at each spot.
          </p>
        </div>
      </div>
    </>
  );
}

export default LoveMap;
