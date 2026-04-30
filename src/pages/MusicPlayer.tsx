import { useState } from "react";

// SVG Icons
const MusicIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
      fill="#d63384"
    />
    <circle cx="10" cy="17" r="2" fill="#ff6b9d" />
  </svg>
);

const PlayIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 5v14l11-7z" fill="#d63384" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="#ff6b9d"
    />
  </svg>
);

const songs = [
  {
    id: 1,
    title: "Glue Song",
    artist: "beabadoobee",
    emoji: "🎵",
    duration: "2:54",
  },
  {
    id: 2,
    title: "Perfect",
    artist: "Ed Sheeran",
    emoji: "💕",
    duration: "4:23",
  },
  {
    id: 3,
    title: "All of Me",
    artist: "John Legend",
    emoji: "🎹",
    duration: "4:29",
  },
  {
    id: 4,
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    emoji: "🎸",
    duration: "4:41",
  },
  {
    id: 5,
    title: "A Thousand Years",
    artist: "Christina Perri",
    emoji: "💝",
    duration: "4:45",
  },
  {
    id: 6,
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    emoji: "🎶",
    duration: "3:00",
  },
];

function MusicPlayer(): JSX.Element {
  const [selectedSong, setSelectedSong] = useState<(typeof songs)[0] | null>(null);

  const photoNames = [
    "cherry_blossom_walk", "cafe_morning", "beach_sunset", 
    "stargazing_hill", "kitchen_chaos", "baking_together"
  ];

  const cmHandlePlay = (song: typeof songs[0]): void => {
    setSelectedSong(song);
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-music-container">
        <div className="cm-music-header">
          <MusicIcon />
          <h1 className="cm-music-title">Our Love Playlist</h1>
          <p className="cm-music-subtitle">Songs that remind me of you 🎶</p>
        </div>

        <div className="cm-music-player">
          <div className="cm-now-playing">
            <div className="cm-album-art">
              {selectedSong ? (
                <img src={`/photos/${photoNames[selectedSong.id - 1]}.png`} alt="Album Art" className="cm-album-img" />
              ) : (
                <MusicIcon />
              )}
              {selectedSong && (
                <div className="cm-playing-animation">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
            <div className="cm-song-info">
              <h3 className="cm-song-title">{selectedSong ? selectedSong.title : "Select a song"}</h3>
              <p className="cm-song-artist">{selectedSong ? selectedSong.artist : "Our special playlist"}</p>
            </div>
          </div>

          <div className="cm-song-list">
            {songs.map((song, index) => (
              <div
                key={song.id}
                className={`cm-song-item ${selectedSong?.id === song.id ? 'cm-active-song' : ''}`}
                onClick={() => cmHandlePlay(song)}
              >
                <span className="cm-song-number">{index + 1}</span>
                <span className="cm-song-emoji">{song.emoji}</span>
                <div className="cm-song-details">
                  <span className="cm-song-name">{song.title}</span>
                  <span className="cm-song-artist-name">{song.artist}</span>
                </div>
                <span className="cm-song-duration">{song.duration}</span>
                <button className="cm-play-btn">
                  <PlayIcon />
                </button>
                <span className="cm-song-heart">
                  <HeartIcon />
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .cm-album-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;
          }
          .cm-active-song {
            background: #fff0f3;
          }
          .cm-active-song .cm-song-name {
            color: #d63384;
          }
        `}</style>

        <div className="cm-music-note">
          <p>
            💡 Connect your Spotify or add YouTube embed links to make it
            playable!
          </p>
        </div>
      </div>
    </>
  );
}

export default MusicPlayer;
