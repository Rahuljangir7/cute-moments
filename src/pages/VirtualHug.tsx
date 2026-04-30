import { useState } from "react";

const VirtualHug = () => {
  const [hugStage, setHugStage] = useState(0); 

  const handleHugClick = () => {
    if (hugStage < 3) {
      setHugStage(prev => prev + 1);
    } else {
      setHugStage(0);
    }
  };

  const getButtonText = () => {
    switch (hugStage) {
      case 1: return "Wait...";
      case 2: return "Ouch..";
      case 3: return "Stop, it hurts! ❤️";
      default: return "Give Me a Hug!";
    }
  };

  const getMessage = () => {
    switch (hugStage) {
      case 1: return "Holding you tight...";
      case 2: return "Squeezing even harder!";
      case 3: return "Never letting you go! ❤️";
      default: return "Need a hug? I'm right here.";
    }
  };

  const getHugImage = () => {
    switch (hugStage) {
      case 1: return "/photos/hug_1.png";
      case 2: return "/photos/hug_2.png";
      case 3: return "/photos/hug_3.png";
      default: return "/photos/hug_1.png";
    }
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-hug-container">
        <h1 className="cm-timeline-title">Virtual Hug</h1>
        <p className="cm-timeline-subtitle">{getMessage()}</p>
        
        <div 
          className={`cm-hug-wrapper stage-${hugStage}`} 
          onClick={handleHugClick}
        >
          <div className="cm-hug-image-frame">
            <img 
              src={getHugImage()} 
              alt="Romantic Hug" 
              className="cm-hug-main-img"
              key={hugStage} // Force re-animation on image change
            />
            <div className="cm-hug-overlay-glow"></div>
          </div>
        </div>

        <div className="cm-hug-actions">
          <button 
            className={`cm-hug-btn stage-${hugStage}`} 
            onClick={handleHugClick}
          >
            {getButtonText()}
          </button>

          {hugStage === 3 && (
            <button 
              className="cm-hug-btn cm-reset-btn" 
              onClick={() => setHugStage(0)}
            >
              🔄 Reset Hug
            </button>
          )}
        </div>

        <div className="cm-music-note" style={{ marginTop: '40px' }}>
          <p>💡 Each click makes the hug tighter and more realistic!</p>
        </div>

        <style>{`
          .cm-hug-wrapper {
            margin: 40px 0;
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            display: inline-block;
          }

          .cm-hug-image-frame {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            overflow: hidden;
            border: 8px solid white;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            position: relative;
            background: #eee;
          }

          .cm-hug-main-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            animation: fadeIn 0.5s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(1.1); }
            to { opacity: 1; transform: scale(1); }
          }

          .cm-hug-overlay-glow {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle, transparent 40%, rgba(214, 51, 132, 0.2) 100%);
            pointer-events: none;
            transition: all 0.5s ease;
          }

          /* Stage Animations */
          .stage-1 .cm-hug-image-frame { transform: scale(1.05); }
          .stage-2 .cm-hug-image-frame { transform: scale(1.15); }
          .stage-3 .cm-hug-wrapper { 
            animation: shake 0.2s infinite;
          }
          .stage-3 .cm-hug-image-frame {
            transform: scale(1.2);
            border-color: #ff1744;
          }

          .stage-1 .cm-hug-overlay-glow { background: radial-gradient(circle, transparent 30%, rgba(255, 107, 157, 0.4) 100%); }
          .stage-2 .cm-hug-overlay-glow { background: radial-gradient(circle, transparent 20%, rgba(233, 30, 99, 0.5) 100%); }
          .stage-3 .cm-hug-overlay-glow { background: radial-gradient(circle, transparent 10%, rgba(255, 23, 68, 0.6) 100%); }

          @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }

          .cm-hug-actions {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
          }

          .cm-hug-btn {
            background: linear-gradient(135deg, #f093fb, #f5576c);
            color: white;
            padding: 15px 40px;
            border-radius: 30px;
            border: none;
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(245, 87, 108, 0.3);
          }

          .cm-hug-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(245, 87, 108, 0.4);
          }

          .cm-hug-btn.stage-3 {
            background: #ff1744;
          }

          .cm-reset-btn {
            background: #f8f9fa;
            color: #666;
            padding: 10px 25px;
            font-size: 0.9rem;
            box-shadow: none;
            border: 1px solid #eee;
          }
        `}</style>
      </div>
    </>
  );
};

export default VirtualHug;
