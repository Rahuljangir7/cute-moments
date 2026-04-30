import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

// SVG Icons
const QuizIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="#d63384"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M12 16v-4M12 8h.01"
      stroke="#d63384"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
      fill="#4caf50"
    />
  </svg>
);

const quizQuestions = [
  {
    id: 1,
    question: "What's my favorite color?",
    options: ["Blue", "Pink", "Red", "Purple"],
    correct: 1,
  },
  {
    id: 2,
    question: "What food do I love the most?",
    options: ["Pizza", "Burgers", "Pasta", "Sushi"],
    correct: 0,
  },
  {
    id: 3,
    question: "What's my dream vacation destination?",
    options: ["Paris", "Maldives", "Tokyo", "Bali"],
    correct: 1,
  },
  {
    id: 4,
    question: "What makes me happiest?",
    options: ["Gifts", "Quality time", "Surprises", "Your presence"],
    correct: 3,
  },
  {
    id: 5,
    question: "What's my favorite movie genre?",
    options: ["Romance", "Comedy", "Action", "Drama"],
    correct: 0,
  },
];

function CompatibilityQuiz(): JSX.Element {
  const [cmCurrentQuestion, setCmCurrentQuestion] = useState(0);
  const [cmScore, setCmScore] = useState(0);
  const [cmShowResult, setCmShowResult] = useState(false);
  const [cmSelectedAnswer, setCmSelectedAnswer] = useState<number | null>(null);
  const [cmShowFeedback, setCmShowFeedback] = useState(false);

  useEffect(() => {
    if (cmShowResult) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff6b9d", "#d63384", "#4caf50", "#ffd700"]
      });
    }
  }, [cmShowResult]);

  const cmHandleAnswer = (optionIndex: number): void => {
    setCmSelectedAnswer(optionIndex);
    setCmShowFeedback(true);

    const isCorrect = optionIndex === quizQuestions[cmCurrentQuestion].correct;
    if (isCorrect) {
      setCmScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (cmCurrentQuestion < quizQuestions.length - 1) {
        setCmCurrentQuestion((prev) => prev + 1);
        setCmSelectedAnswer(null);
        setCmShowFeedback(false);
      } else {
        setCmShowResult(true);
      }
    }, 1500);
  };

  const cmGetResultMessage = (): string => {
    const percentage = (cmScore / quizQuestions.length) * 100;
    if (percentage === 100) return "Perfect! You know me completely! 💕";
    if (percentage >= 80) return "Amazing! You know me so well! 💝";
    if (percentage >= 60) return "Good! We have a strong connection! 💗";
    return "We need more dates to get to know each other better! 💓";
  };

  const cmHandleRestart = (): void => {
    setCmCurrentQuestion(0);
    setCmScore(0);
    setCmShowResult(false);
    setCmSelectedAnswer(null);
    setCmShowFeedback(false);
  };

  return (
    <>
      <div className="cm-hearts-bg"></div>
      <div className="cm-container cm-quiz-container">
        <div className="cm-quiz-header">
          <QuizIcon />
          <h1 className="cm-quiz-title">How Well Do You Know Me?</h1>
          <p className="cm-quiz-subtitle">Test our compatibility! 💕</p>
        </div>

        {!cmShowResult ? (
          <div className="cm-quiz-content">
            <div className="cm-quiz-progress">
              <div
                className="cm-quiz-progress-bar"
                style={{
                  width: `${((cmCurrentQuestion + 1) / quizQuestions.length) * 100}%`,
                }}
              ></div>
            </div>

            <div className="cm-quiz-question-box">
              <span className="cm-quiz-number">
                Question {cmCurrentQuestion + 1}/{quizQuestions.length}
              </span>
              <h2 className="cm-quiz-question">
                {quizQuestions[cmCurrentQuestion].question}
              </h2>
            </div>

            <div className="cm-quiz-options">
              {quizQuestions[cmCurrentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`cm-quiz-option ${
                    cmShowFeedback &&
                    index === quizQuestions[cmCurrentQuestion].correct
                      ? "cm-correct"
                      : cmShowFeedback && cmSelectedAnswer === index
                        ? "cm-wrong"
                        : ""
                  }`}
                  onClick={() => !cmShowFeedback && cmHandleAnswer(index)}
                  disabled={cmShowFeedback}
                >
                  <span className="cm-option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="cm-option-text">{option}</span>
                  {cmShowFeedback &&
                    index === quizQuestions[cmCurrentQuestion].correct && (
                      <CheckIcon />
                    )}
                </button>
              ))}
            </div>

            {cmShowFeedback && (
              <div
                className={`cm-quiz-feedback ${cmSelectedAnswer === quizQuestions[cmCurrentQuestion].correct ? "cm-correct-feedback" : "cm-wrong-feedback"}`}
              >
                {cmSelectedAnswer === quizQuestions[cmCurrentQuestion].correct
                  ? "Correct! 💕"
                  : "Not quite! 💝"}
              </div>
            )}
          </div>
        ) : (
          <div className="cm-quiz-result">
            <div className="cm-quiz-score">
              <span className="cm-score-number">{cmScore}</span>
              <span className="cm-score-total">/{quizQuestions.length}</span>
            </div>
            <p className="cm-quiz-result-message">{cmGetResultMessage()}</p>
            <div className="cm-quiz-result-actions">
              <button className="cm-quiz-restart-btn" onClick={cmHandleRestart}>
                🔄 Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CompatibilityQuiz;
