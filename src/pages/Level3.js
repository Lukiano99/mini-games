import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/level3.css";
import { gameActions } from "../store/GameStore";
// QUIZ
const Level3 = ({ gameId }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const questions = useSelector((state) => state.quizQuestions);

  const dispatch = useDispatch();

  let feedback;

  switch (isCorrect) {
    case true:
      feedback = <h2 className="feedback">Tacno!</h2>;
      break;
    case false:
      feedback = <h2 className="feedback">Pogresan odgovor. Probaj ponovo!</h2>;
      break;
    default:
      feedback = <h2 className="feedback"> </h2>;
  }

  const handleAnswer = () => {
    // Provera tačnosti odgovora, a zatim prelazak na sledeće pitanje
    const correct = selectedAnswer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    setTimeout(() => {
      if (correct) {
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion((prev) => prev + 1);
          setSelectedAnswer(null);
          setShowFeedback(false);
        } else {
          dispatch(gameActions.levelCompleted(gameId));
        }
      } else {
        setShowFeedback(false);
      }
    }, 1000);
  };

  return (
    <div className="gameDiv">
      <h2 className="header">{questions[currentQuestion].question}</h2>
      <div className="optionsDiv">
        {questions[currentQuestion].options.map((option, index) => (
          <div
            className={`option ${selectedAnswer === index ? "active" : ""}`}
            key={index}
            onClick={() => setSelectedAnswer(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="submit">
        {!showFeedback && (
          <button className="quizButton" onClick={handleAnswer}>
            POTVRDI
          </button>
        )}
        {showFeedback && feedback}
      </div>
    </div>
  );
};

export default Level3;
