import React from "react";
import "./styles/level2.css";

const Level2 = () => {
  const gameDescription =
    "Unlock the secret! Decode the encrypted message bellow to progress.";

  const originalMessage = "It's not a bug, it's a feature.";

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

  console.log(encryptedMessage);

  return (
    <div className="gameDiv">
      <div className="question">
        <h3 className="header">{gameDescription}</h3>
      </div>
      <div className="message">
        <h3 className="encryptedMessage">{encryptedMessage}</h3>
      </div>
      <div className="inputDiv">
        <input
          alt="Decipher the message here"
          className="inputArea"
          type="text"
        />
      </div>
      <div className="checkButton">
        <button type="submit" className="submitButton">
          Decrypt & Submit
        </button>
      </div>
    </div>
  );
};

export default Level2;
