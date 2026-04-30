import { Link, useLocation } from "react-router-dom";

const HomeButton = () => {
  const location = useLocation();
  
  // Don't show on Landing page
  if (location.pathname === "/") return null;

  return (
    <div className="cm-home-nav">
      <Link to="/" className="cm-home-btn" title="Back to Home">
        🏠
      </Link>
    </div>
  );
};

export default HomeButton;
