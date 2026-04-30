import SEO from "../components/SEO";

const Terms = () => {
  return (
    <>
      <SEO title="Terms of Service" description="Terms of service for Cute Moments app." />
      <div className="cm-hearts-bg"></div>
      <div className="cm-container">
        <h1 className="cm-timeline-title">Terms of Service</h1>
        <div className="cm-content-box" style={{ textAlign: 'left', background: 'white', padding: '30px', borderRadius: '20px' }}>
          <h3>1. Acceptance of Terms</h3>
          <p>By using Cute Moments, you agree to these terms. This app is provided for personal and romantic entertainment purposes.</p>
          
          <h3>2. User Content</h3>
          <p>You are responsible for the photos and messages you add to the app. Since data is stored locally, deleting your browser cache will remove your saved moments.</p>
          
          <h3>3. Limitations</h3>
          <p>We are not responsible for any loss of data. This app is provided "as is" without warranties of any kind.</p>
        </div>
      </div>
    </>
  );
};

export default Terms;
