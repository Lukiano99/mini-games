import React, { useState } from "react";
import { gameActions } from "../store/GameStore";
import { useDispatch } from "react-redux";
import "./styles/level5.css";

const Level5 = ({ gameId }) => {
  // const [boxes, setBoxes] = useState([false, false, false, false, false]);
  const boxes = [false, false, false, false, false];
  const emojis = ["🌹", "🗺️", "🌞", "📖", "🛩️"];
  const question =
    "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I";
  const correctAnswer = 1;
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedbac] = useState(false);
  const dispatch = useDispatch();

  let feedback;
  switch (isCorrect) {
    case true:
      feedback = <h2 className="feedback">Correct!</h2>;
      break;
    case false:
      feedback = <h2 className="feedback">Wrong answer. Try again!</h2>;
      break;
    default:
      feedback = <h2 className="feedback"> </h2>;
  }

  function handleAnswer(index) {
    const correct = correctAnswer === index;
    setIsCorrect(correct);
    setShowFeedbac(true);

    setTimeout(() => {
      if (correct) {
        dispatch(gameActions.levelCompleted(gameId));
      } else {
        setShowFeedbac(false);
      }
    }, 1000);
  }

  return (
    <div className="gameDiv">
      <div className="puzzle-question">
        <h3 className="header">{question}</h3>
      </div>
      <div className="box-grid">
        {boxes.map((box, index) => (
          <div className="box" key={index} onClick={() => handleAnswer(index)}>
            {emojis[index]}
          </div>
        ))}
      </div>
      {showFeedback && <p className="feedback">{feedback}</p>}
    </div>
  );
};

export default Level5;
