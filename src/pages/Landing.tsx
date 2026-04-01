import { useNavigate } from "react-router-dom";

function Landing(): JSX.Element {
  const navigate = useNavigate();

  const cmNavigateToProposal = (): void => {
    navigate("/proposal");
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-landing-container">
        <h1 className="cm-landing-title">Welcome 💕</h1>
        <p className="cm-landing-subtitle">
          I have something special for you...
        </p>

        <button className="cm-valentine-btn" onClick={cmNavigateToProposal}>
          💝 Valentine's Day
        </button>
      </div>
    </>
  );
}

export default Landing;
