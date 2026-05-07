import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Cute Moments",
  description:
    "Need help or feedback? Contact Cute Moments for romantic app support, partnership ideas, or relationship feature suggestions.",
  keywords: [
    "contact cute moments",
    "relationship app support",
    "romantic app feedback",
  ],
  alternates: {
    canonical: "https://cute-moments.vercel.app/contact",
  },
};

const Contact = () => {
  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container">
        <h1 className="cm-timeline-title">Contact Us</h1>
        <div className="cm-content-box cm-contact-content-box">
          <p>Have questions or feedback? We&apos;d love to hear from you!</p>
          <div className="cm-contact-info">
            <p>📧 Email: rahuljangir99501@gmail.com</p>
            <p className="cm-contact-location">
              📍 Location: Jaipur, Vaishali Nagar
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
