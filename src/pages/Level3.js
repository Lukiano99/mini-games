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
  const [feedback, setFeedback] = useState("Pogresan odgovor. Probaj ponovo!");
  const questions = useSelector((state) => state.quizQuestions);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };

  const dispatch = useDispatch();

  let feedBack = (
    <h2 className="feedback">{feedback}</h2>
  );

  const handleNextQuestion = () => {
    // Provera tačnosti odgovora, a zatim prelazak na sledeće pitanje
    if (selectedAnswer !== null) {
      const correct =
        selectedAnswer === questions[currentQuestion].correctAnswer;
      setIsCorrect(correct);
      setShowFeedback(true);

      if (correct) {
        if (currentQuestion + 1 < questions.length) {
          setFeedback("Tacno!");
          setTimeout(() => {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            setSelectedAnswer(null);
            setShowFeedback(true);
            setShowFeedback(false);
          }, 1000);
        } else {
          dispatch(gameActions.levelCompleted(gameId));
        }
      } else {
        setFeedback("Pogresan odgovor. Probaj ponovo!");
        setTimeout(() => {
          setShowFeedback(false);
        }, 1000);
      }
    } else {
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
      }, 1000);
    }
  };

  return (
    <div className="gameDiv">
      <h2 className="header">{questions[currentQuestion].question}</h2>
      <div className="optionsDiv">
        {questions[currentQuestion].options.map((option, index) => (
          <div
            className={`option ${selectedAnswer === index ? "active" : ""}`}
            key={index}
            onClick={() => handleAnswerClick(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="submit">
        {!showFeedback && (
          <button className="quizButton" onClick={handleNextQuestion}>
            SUBMIT
          </button>
        )}
        {showFeedback && feedBack}
      </div>
    </div>
  );
};

export default Level3;
