// Placeholder photos - add your actual photos to public/photos/ folder
const GalleryIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="#d63384"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="8.5" cy="8.5" r="1.5" fill="#ff6b9d" />
    <path
      d="M3 15l5-5 4 4 6-6 3 3"
      stroke="#d63384"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhotoIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      stroke="#ff6b9d"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="12" cy="12" r="3" stroke="#ff6b9d" strokeWidth="2" />
    <circle cx="17" cy="7" r="1" fill="#ff6b9d" />
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

// Placeholder photos - add your actual photos to public/photos/ folder
const cmPhotos = [
  {
    id: 1,
    title: "First Meet",
    date: "The day everything began",
    placeholder: "photo-1.jpg",
  },
  {
    id: 2,
    title: "First Date",
    date: "When sparks flew",
    placeholder: "photo-2.jpg",
  },
  {
    id: 3,
    title: "Adventure",
    date: "Exploring together",
    placeholder: "photo-3.jpg",
  },
  {
    id: 4,
    title: "Special Moment",
    date: "A memory to cherish",
    placeholder: "photo-4.jpg",
  },
  {
    id: 5,
    title: "Laughter",
    date: "Joy in every frame",
    placeholder: "photo-5.jpg",
  },
  {
    id: 6,
    title: "Together",
    date: "Side by side",
    placeholder: "photo-6.jpg",
  },
];

function PhotoGallery(): JSX.Element {
  const cmHandlePhotoClick = (photoId: number): void => {
    // Placeholder for photo viewing
    alert(
      `Photo ${photoId} clicked! Add your photos to public/photos/ folder and update the paths.`,
    );
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-gallery-container">
        <div className="cm-gallery-header">
          <GalleryIcon />
          <h1 className="cm-gallery-title">Our Photo Gallery</h1>
          <p className="cm-gallery-subtitle">
            Capturing moments, creating memories 📸
          </p>
        </div>

        <div className="cm-gallery-grid">
          {cmPhotos.map((cmPhoto, cmIndex) => (
            <div
              key={cmPhoto.id}
              className={`cm-gallery-item ${cmIndex % 3 === 0 ? "cm-large" : ""}`}
              onClick={() => cmHandlePhotoClick(cmPhoto.id)}
            >
              <div className="cm-photo-placeholder">
                <PhotoIcon />
                <div className="cm-photo-overlay">
                  <HeartIcon />
                </div>
              </div>
              <div className="cm-photo-info">
                <h3 className="cm-photo-title">{cmPhoto.title}</h3>
                <p className="cm-photo-date">{cmPhoto.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cm-gallery-instruction">
          <p>
            💡 Add your photos to <code>public/photos/</code> folder and update
            the paths in PhotoGallery.tsx
          </p>
        </div>
      </div>
    </>
  );
}

export default PhotoGallery;
