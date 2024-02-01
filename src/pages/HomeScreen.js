import React from "react";
import { useSelector } from "react-redux";
import LevelIcon from "../components/LevelIcon";
import GameOverMessage from "../components/GameOverMessage";
const HomeScreen = () => {
  const games = useSelector((state) => state.levels);
  const isGameOver =
    games
      .filter((lvl) => lvl.status === "success")
      .reduce((acc, lvl) => acc + 1, 0) === games.length;
  return (
    <>
      <h1 className="header">Lukiano's Games</h1>
      <div className="challenge-container">
        {games.map((game) => (
          <div className="challenge-row" key={game.id}>
            <LevelIcon
              page={`/level${game.id}`}
              id={game.id}
              icon={game.icon}
              success={game.status}
            />
          </div>
        ))}
      </div>
      {isGameOver && <GameOverMessage />}
    </>
  );
};

export default HomeScreen;
