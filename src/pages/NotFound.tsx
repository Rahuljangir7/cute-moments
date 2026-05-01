import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO title="404 - Lost in Love" description="This page has wandered away from our heart." />
      <div className="cm-hearts-bg"></div>
      <div className="cm-notfound-3d-scene">
        <div className="cm-notfound-card">
          <div className="cm-3d-heart-wrapper">
            <div className="cm-3d-heart">
              <div className="heart-side left"></div>
              <div className="heart-side right"></div>
              <div className="heart-side top"></div>
            </div>
            <div className="cm-heart-shadow"></div>
          </div>
          
          <h1 className="cm-3d-title">404</h1>
          <h2 className="cm-3d-subtitle">Lost in Our Moments</h2>
          <p className="cm-3d-desc">
            Even the most beautiful paths can lead to nowhere. 
            Let's find our way back to where love began.
          </p>
          
          <Link to="/" className="cm-3d-btn">
            <span className="btn-icon">🏠</span> Back to Our Magic
          </Link>
        </div>
      </div>

      <style>{`
        .cm-notfound-3d-scene {
          perspective: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
          background: radial-gradient(circle at center, #fff5f7 0%, #ffe4e8 100%);
        }

        .cm-notfound-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          padding: 60px 40px;
          border-radius: 40px;
          box-shadow: 0 25px 50px rgba(214, 51, 132, 0.15);
          text-align: center;
          max-width: 500px;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.8);
          transform: rotateX(5deg);
          transition: transform 0.5s ease;
        }

        .cm-notfound-card:hover {
          transform: rotateX(0deg) translateY(-10px);
        }

        /* 3D Heart CSS */
        .cm-3d-heart-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 40px;
          transform-style: preserve-3d;
          animation: float3d 4s ease-in-out infinite;
        }

        @keyframes float3d {
          0%, 100% { transform: translateY(0) rotateY(0deg); }
          50% { transform: translateY(-20px) rotateY(180deg); }
        }

        .cm-3d-heart {
          position: relative;
          width: 60px;
          height: 60px;
          transform-style: preserve-3d;
          margin: 30px auto;
        }

        .heart-side {
          position: absolute;
          width: 60px;
          height: 90px;
          background: #ff4d6d;
          border-radius: 50px 50px 0 0;
        }

        .left {
          transform: rotate(-45deg);
          transform-origin: 100% 100%;
          left: 0;
        }

        .right {
          transform: rotate(45deg);
          transform-origin: 0% 100%;
          right: 0;
        }

        .cm-heart-shadow {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 10px;
          background: rgba(0,0,0,0.1);
          border-radius: 50%;
          filter: blur(5px);
          animation: shadowScale 4s ease-in-out infinite;
        }

        @keyframes shadowScale {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.3; }
          50% { transform: translateX(-50%) scale(0.6); opacity: 0.1; }
        }

        .cm-3d-title {
          font-size: 6rem;
          font-weight: 900;
          background: linear-gradient(135deg, #ff4d6d, #d63384);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
          letter-spacing: -2px;
        }

        .cm-3d-subtitle {
          font-family: "Dancing Script", cursive;
          font-size: 2.8rem;
          color: #333;
          margin-bottom: 20px;
        }

        .cm-3d-desc {
          color: #666;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .cm-3d-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #ff4d6d, #d63384);
          color: white;
          padding: 18px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 800;
          font-size: 1.1rem;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(214, 51, 132, 0.4);
        }

        .cm-3d-btn:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 15px 40px rgba(214, 51, 132, 0.6);
        }

        .btn-icon {
          font-size: 1.3rem;
        }

        @media (max-width: 480px) {
          .cm-notfound-card { padding: 40px 20px; }
          .cm-3d-title { font-size: 4rem; }
          .cm-3d-subtitle { font-size: 2.2rem; }
        }
      `}</style>
    </>
  );
};

export default NotFound;
