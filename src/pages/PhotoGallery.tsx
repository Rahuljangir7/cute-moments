import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";

const GalleryIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#d63384" strokeWidth="2" fill="none" />
    <circle cx="8.5" cy="8.5" r="1.5" fill="#ff6b9d" />
    <path d="M3 15l5-5 4 4 6-6 3 3" stroke="#d63384" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ff6b9d" />
  </svg>
);

const CameraIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

interface Photo {
  id: number;
  title: string;
  date: string;
  src: string;
}

const initialPhotos: Photo[] = [
  { id: 1, title: "Cherry Blossom Walk", date: "April 2024", src: "/photos/cherry_blossom_walk.png" },
  { id: 2, title: "Cozy Cafe Morning", date: "May 2024", src: "/photos/cafe_morning.png" },
  { id: 3, title: "Golden Hour Beach", date: "June 2024", src: "/photos/beach_sunset.png" },
  { id: 4, title: "Under the Stars", date: "July 2024", src: "/photos/stargazing_hill.png" },
  { id: 5, title: "Kitchen Chaos", date: "August 2024", src: "/photos/kitchen_chaos.png" },
  { id: 6, title: "Baking Together", date: "September 2024", src: "/photos/baking_together.png" },
  { id: 7, title: "Midnight Stroll", date: "October 2024", src: "/photos/midnight_stroll.png" },
  { id: 8, title: "Movie Marathon", date: "November 2024", src: "/photos/movie_marathon.png" },
  { id: 9, title: "Dancing in Rain", date: "December 2024", src: "/photos/dancing_in_rain.png" },
  { id: 10, title: "Picnic Day", date: "January 2025", src: "/photos/picnic_meadow.png" },
  { id: 11, title: "Winter Magic", date: "February 2025", src: "/photos/winter_skating.png" },
  { id: 12, title: "Travel Memories", date: "March 2025", src: "/photos/train_travel.png" },
];

function PhotoGallery(): JSX.Element {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("cm-user-photos-v2");
    if (saved) {
      const userSaved = JSON.parse(saved);
      const merged = initialPhotos.map(p => {
        const found = userSaved.find((us: any) => us.id === p.id);
        return found ? found : p;
      });
      setPhotos(merged);
    } else {
      setPhotos(initialPhotos);
    }
  }, []);

  const handleInFrameUpload = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updated = photos.map(p => 
          p.id === id ? { ...p, src: reader.result as string } : p
        );
        setPhotos(updated);
        
        // Save changed photos
        const changed = updated.filter(p => {
          const original = initialPhotos.find(ip => ip.id === p.id);
          return original && original.src !== p.src;
        });
        localStorage.setItem("cm-user-photos-v2", JSON.stringify(changed));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    if (galleryRef.current) {
      // Add class to hide UI elements like camera icons during capture
      galleryRef.current.classList.add("cm-capturing");
      
      const canvas = await html2canvas(galleryRef.current, {
        useCORS: true,
        backgroundColor: "#ffffff",
        scale: 2, // Higher quality
      });
      
      galleryRef.current.classList.remove("cm-capturing");
      
      const link = document.createElement("a");
      link.download = "our-moments-grid.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-gallery-container">
        <div className="cm-gallery-header">
          <GalleryIcon />
          <h1 className="cm-gallery-title">Our Romantic Gallery</h1>
          <p className="cm-gallery-subtitle">A collection of our most realistic and precious memories 💖</p>
        </div>

        <div className="cm-gallery-actions no-print">
          <button className="cm-download-btn" onClick={handleDownload}>
            📥 Download Gallery Grid
          </button>
        </div>

        <div className="cm-gallery-grid" ref={galleryRef} style={{ padding: '20px', background: '#fff', borderRadius: '20px' }}>
          {photos.map((photo, index) => (
            <div key={photo.id} className={`cm-gallery-item ${index % 5 === 0 ? "cm-large" : ""}`}>
              <div className="cm-photo-placeholder">
                <img src={photo.src} alt={photo.title} className="cm-photo-img" />
                
                {/* In-frame Upload Button */}
                <label className="cm-in-frame-upload">
                  <CameraIcon />
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => handleInFrameUpload(photo.id, e)} 
                    style={{ display: 'none' }} 
                  />
                </label>

                <div className="cm-photo-overlay">
                  <HeartIcon />
                </div>
              </div>
              <div className="cm-photo-info">
                <h3 className="cm-photo-title">{photo.title}</h3>
                <p className="cm-photo-date">{photo.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cm-in-frame-upload {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255, 255, 255, 0.9);
          color: #d63384;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          opacity: 0;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .cm-gallery-item:hover .cm-in-frame-upload {
          opacity: 1;
        }

        .cm-capturing .cm-in-frame-upload,
        .cm-capturing .cm-photo-overlay {
          display: none !important;
        }

        .cm-download-btn {
          background: linear-gradient(135deg, #f093fb, #f5576c);
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          border: none;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(245, 87, 108, 0.3);
          margin-bottom: 20px;
        }

        .cm-download-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(245, 87, 108, 0.4);
        }

        @media (max-width: 768px) {
          .cm-in-frame-upload {
            opacity: 1; /* Always show on mobile */
          }
        }

        @media print {
          .no-print { display: none; }
        }
      `}</style>
    </>
  );
}

export default PhotoGallery;
