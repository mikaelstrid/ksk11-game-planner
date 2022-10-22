import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import TeamHelper from "../../helpers/team.helper";
import { addRoosterToGame } from "./gamesSlice";
import Rooster from "./Rooster";

function Game() {
  const dispatch = useAppDispatch();
  const games = useAppSelector((state) => state.games);
  const teams = useAppSelector((state) => state.teams);
  let { id } = useParams();
  const game = games.find((a) => a.id === id);

  if (!game) return <p>404</p>;

  return (
    <div>
      <h2>{TeamHelper.getTeamName(game.opponentId, teams)}</h2>
      <div className="mb-4">
        {game.date}
        <br />
        {game.isHomeGame ? "Hemma" : "Borta"}
      </div>
      <div>
        <h3>Laguppställningar</h3>
        {game.roosters.map((rooster, index) => (
          <div key={rooster.id} className="mb-3">
            <Rooster gameId={game.id} rooster={rooster}></Rooster>
          </div>
        ))}
        <Button
          onClick={(_) => {
            dispatch(addRoosterToGame(game.id));
          }}
        >
          Lägg till laguppställning
        </Button>
      </div>
    </div>
  );
}

export default Game;
