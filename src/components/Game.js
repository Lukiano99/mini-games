import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../store/GameStore";
import { useParams } from "react-router-dom";
import SuccessMessage from "./LevelPassedMessage";
const Game = () => {
  const levels = useSelector((state) => state.levels);
  const dispatch = useDispatch();

  const params = useParams();
  const gameId = params.levelId.replace("level", "");


  function handleLevelComplete() {
    dispatch(gameActions.levelCompleted(gameId));
  }
  return (
    <>
      <div className="center">
        {levels[gameId - 1].status === "success" && <SuccessMessage />}
        {levels[gameId - 1].status !== "success" && (
          <button className="button" onClick={handleLevelComplete}>
            Click me to TEST
          </button>
        )}
      </div>
    </>
  );
};

export default Game;
