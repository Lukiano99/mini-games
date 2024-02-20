import React, { useRef, useState } from "react";
import "./styles/level2.css";
import { useDispatch } from "react-redux";
import { gameActions } from "../store/GameStore";

const Level2 = ({ gameId }) => {
  const gameDescription =
    "Unlock the secret! Decode the encrypted message bellow to progress.";
  const originalMessage = "It's not a bug, it's a feature.";
  const dispatch = useDispatch();
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const inputRef = useRef();
  const encryptedMessage = originalMessage
    .split("")
    .map((char) =>
      char === " "
        ? " "
        : char === "."
        ? "."
        : char === "'"
        ? "'"
        : String.fromCharCode(char.charCodeAt(0) + 3)
    )
    .join("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const correct = originalMessage === inputRef.current.value;
    setIsCorrect(correct);
    setShowFeedback(true);

    setTimeout(() => {
      if (correct) {
        dispatch(gameActions.levelCompleted(gameId));
      } else {
        setShowFeedback(false);
      }
    }, 1000);
  };

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

  return (
    <div className="gameDiv">
      <div className="question">
        <h3 className="header">{gameDescription}</h3>
      </div>
      <div className="message">
        <h3 className="encryptedMessage">{encryptedMessage}</h3>
      </div>
      <form>
        <div className="inputDiv">
          <input
            alt="Decipher the message here"
            className="inputArea"
            type="text"
            ref={inputRef}
          />
        </div>
        <div className="checkButton">
          <button
            onClick={(ev) => handleSubmit(ev)}
            type="submit"
            className="submitButton"
          >
            Decrypt & Submit
          </button>
        </div>
      </form>
      {showFeedback && <p className="feedback">{feedback}</p>}
    </div>
  );
};

export default Level2;
