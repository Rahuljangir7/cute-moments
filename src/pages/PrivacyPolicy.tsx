import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy policy for Cute Moments app." />
      <div className="cm-hearts-bg"></div>
      <div className="cm-container">
        <h1 className="cm-timeline-title">Privacy Policy</h1>
        <div className="cm-content-box" style={{ textAlign: 'left', background: 'white', padding: '30px', borderRadius: '20px' }}>
          <p>Last updated: May 01, 2026</p>
          <h3>1. Information We Collect</h3>
          <p>Cute Moments is a private, client-side application. We do not store your personal photos or messages on our servers. All data, including photos you upload and stickers you place, is stored locally in your browser's local storage.</p>
          
          <h3>2. How We Use Your Information</h3>
          <p>Your information is used solely to provide the interactive features of the app, such as the scrapbook and photo gallery, on your local device.</p>
          
          <h3>3. Cookies</h3>
          <p>We use local storage and basic session cookies to remember your preferences and keep the app functional.</p>
          
          <h3>4. Third-Party Services</h3>
          <p>We use Google fonts and may use Google AdSense in the future. These services may collect basic usage data as per their own privacy policies.</p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
