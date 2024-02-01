import React from "react";
import { useSelector } from "react-redux";
// import { gameActions } from "../store/GameStore";
import { useParams } from "react-router-dom";
import SuccessMessage from "./LevelPassedMessage";
import Level1 from "../pages/Level1";
import Level2 from "../pages/Level2";
import Level3 from "../pages/Level3";
import Level4 from "../pages/Level4";
import Level5 from "../pages/Level5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import "../pages/styles/game.css";
const Game = () => {
  library.add(fas, faTwitter, faFontAwesome);

  const levels = useSelector((state) => state.levels);

  const params = useParams();
  const gameId = params.levelId.replace("level", "");
  const isSuccess = levels[gameId - 1].status === "success";
  const gameName = levels[gameId - 1].name;

  let levelComponent;

  switch (gameId) {
    case "1":
      levelComponent = <Level1 gameId={gameId}/>; // Word search
      break;
    case "2":
      levelComponent = <Level2 gameId={gameId}/>; // Cypher
      break;
    case "3":
      levelComponent = <Level3 gameId={gameId}/>; // Quiz
      break;
    case "4":
      levelComponent = <Level4 gameId={gameId}/>; // Memory game
      break;
    case "5":
      levelComponent = <Level5 gameId={gameId}/>; // A puzzle question
      break;
    default:
      levelComponent = <Level1 gameId={gameId}/>;
  }

  // function handleLevelComplete() {
  //   dispatch(gameActions.levelCompleted(gameId));
  // }

  return (
    <>
      <div className="title">
        <div className="backDiv">
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-left"
            className="backButton"
          />
        </div>
        <div className="titleDiv">
          <h1>{gameName}</h1>
        </div>
      </div>
      <div className="center">
        {isSuccess && <SuccessMessage />}
        {!isSuccess && levelComponent}
      </div>
    </>
  );
};

export default Game;
