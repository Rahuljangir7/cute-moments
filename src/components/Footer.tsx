import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="cm-footer">
      <div className="cm-footer-content">
        <p>© 2026 Cute Moments. All rights reserved.</p>
        <div className="cm-footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
      <style>{`
        .cm-footer {
          width: 100%;
          padding: 40px 20px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          margin-top: auto;
          text-align: center;
          border-top: 1px solid rgba(214, 51, 132, 0.1);
        }

        .cm-footer-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cm-footer-content p {
          color: #777;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }

        .cm-footer-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .cm-footer-links a {
          color: #d63384;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .cm-footer-links a:hover {
          color: #ff6b9d;
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .cm-footer-links {
            gap: 10px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
