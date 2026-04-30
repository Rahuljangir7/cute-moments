import SEO from "../components/SEO";

const Contact = () => {
  return (
    <>
      <SEO title="Contact Us" description="Get in touch with the Cute Moments team." />
      <div className="cm-hearts-bg"></div>
      <div className="cm-container">
        <h1 className="cm-timeline-title">Contact Us</h1>
        <div className="cm-content-box" style={{ background: 'white', padding: '30px', borderRadius: '20px' }}>
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <div style={{ marginTop: '30px' }}>
            <p>📧 Email: rahuljangir99501@gmail.com</p>
            <p style={{ marginTop: '10px' }}>📍 Location: Jaipur, Vaishali Nagar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
