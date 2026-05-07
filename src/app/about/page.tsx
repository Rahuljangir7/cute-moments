import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Our Story",
  description:
    "Learn about the mission behind Cute Moments—creating a digital sanctuary for couples to celebrate and cherish their romantic journey.",
  keywords:
    "about cute moments, romantic app mission, relationship memories app",
};

const About = () => {
  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container">
        <h1 className="cm-timeline-title">About Cute Moments</h1>
        <div className="cm-content-box cm-about-content-box">
          <p>
            Cute Moments is a digital sanctuary designed for couples who want to
            celebrate their relationship. We believe that every small moment—a
            hug, a cafe date, a secret message—deserves to be cherished.
          </p>
          <p className="cm-about-mission">
            Our mission is to provide an interactive and beautiful space where
            love grows every day through digital scrapbooks, virtual gestures,
            and shared memories.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
