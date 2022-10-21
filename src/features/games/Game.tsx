import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectGames } from "./gamesSlice";

function Game() {
  const games = useAppSelector(selectGames);
  let { id } = useParams();
  const game = games.find((a) => a.id === parseInt(id ?? ""));
  if (!game) return <p>404</p>;

  return (
    <div>
      <h2>{`${game.date} ${game.opponentId}`}</h2>
    </div>
  );
}

export default Game;
