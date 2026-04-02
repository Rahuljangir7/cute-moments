import { useState } from "react";

// SVG Icons
const HeartIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="#ff6b9d"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="#ffd700"
    />
  </svg>
);

const questions = [
  {
    id: 1,
    question: "How often do you think about them?",
    options: ["All the time!", "Often", "Sometimes", "Rarely"],
  },
  {
    id: 2,
    question: "What's your favorite thing about them?",
    options: [
      "Their smile",
      "Their personality",
      "Everything!",
      "Can't choose one",
    ],
  },
  {
    id: 3,
    question: "How do they make you feel?",
    options: ["Butterflies!", "Happy", "Special", "Complete"],
  },
  {
    id: 4,
    question: "Your ideal date would be?",
    options: [
      "Dinner under stars",
      "Movie night",
      "Adventure",
      "Just being together",
    ],
  },
  {
    id: 5,
    question: "One word to describe your bond?",
    options: ["Magical", "Special", "Unique", "Forever"],
  },
];

function LoveCalculator(): JSX.Element {
  const [cmCurrentQuestion, setCmCurrentQuestion] = useState(0);
  const [cmScore, setCmScore] = useState(0);
  const [cmShowResult, setCmShowResult] = useState(false);
  const [cmSelectedOption, setCmSelectedOption] = useState<number | null>(null);

  const cmHandleAnswer = (optionIndex: number): void => {
    setCmScore((prev) => prev + (optionIndex + 1) * 5);
    setCmSelectedOption(optionIndex);

    setTimeout(() => {
      if (cmCurrentQuestion < questions.length - 1) {
        setCmCurrentQuestion((prev) => prev + 1);
        setCmSelectedOption(null);
      } else {
        setCmShowResult(true);
      }
    }, 500);
  };

  const cmGetLovePercentage = (): number => {
    const maxScore = questions.length * 20;
    const percentage = Math.round((cmScore / maxScore) * 100);
    return Math.min(percentage + 20, 100);
  };

  const cmGetMessage = (): string => {
    const percentage = cmGetLovePercentage();
    if (percentage >= 95) return "Soulmates! 💕 You're meant to be together!";
    if (percentage >= 85)
      return "Perfect Match! 🌟 Your love is truly special!";
    if (percentage >= 75)
      return "Amazing Connection! 💝 Keep nurturing your love!";
    if (percentage >= 65) return "Great Bond! 💗 Beautiful relationship ahead!";
    return "Sweet Beginning! 💓 Love will grow stronger!";
  };

  const cmHandleRestart = (): void => {
    setCmCurrentQuestion(0);
    setCmScore(0);
    setCmShowResult(false);
    setCmSelectedOption(null);
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-calc-container">
        <div className="cm-calc-header">
          <HeartIcon />
          <h1 className="cm-calc-title">Love Calculator</h1>
          <p className="cm-calc-subtitle">How strong is your connection? 💕</p>
        </div>

        {!cmShowResult ? (
          <div className="cm-calc-quiz">
            <div className="cm-calc-progress">
              <div
                className="cm-calc-progress-bar"
                style={{
                  width: `${((cmCurrentQuestion + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
            <p className="cm-calc-question-count">
              Question {cmCurrentQuestion + 1} of {questions.length}
            </p>

            <h2 className="cm-calc-question">
              {questions[cmCurrentQuestion].question}
            </h2>

            <div className="cm-calc-options">
              {questions[cmCurrentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`cm-calc-option-btn ${cmSelectedOption === index ? "cm-selected" : ""}`}
                  onClick={() => cmHandleAnswer(index)}
                  disabled={cmSelectedOption !== null}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="cm-calc-result">
            <div className="cm-calc-percentage">
              <span className="cm-calc-number">{cmGetLovePercentage()}%</span>
              <div className="cm-calc-stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <p className="cm-calc-message">{cmGetMessage()}</p>
            <div className="cm-calc-actions">
              <button className="cm-calc-restart-btn" onClick={cmHandleRestart}>
                🔄 Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LoveCalculator;
