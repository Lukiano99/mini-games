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
const Game = () => {
  const levels = useSelector((state) => state.levels);

  const params = useParams();
  const gameId = params.levelId.replace("level", "");
  const isSuccess = levels[gameId - 1].status === "success";

  let levelComponent;

  switch (gameId) {
    case "1":
      levelComponent = <Level1 />; // Word search
      break;
    case "2":
      levelComponent = <Level2 />; // Cypher
      break;
    case "3":
      levelComponent = <Level3 />; // Quiz
      break;
    case "4":
      levelComponent = <Level4 />; // Memory game
      break;
    case "5":
      levelComponent = <Level5 />; // A puzzle question
      break;
    default:
      levelComponent = <Level1 />;
  }

  // function handleLevelComplete() {
  //   dispatch(gameActions.levelCompleted(gameId));
  // }

  return (
    <>
      <div className="center">
        {isSuccess && <SuccessMessage />}
        {!isSuccess && levelComponent}
      </div>
    </>
  );
};

export default Game;
