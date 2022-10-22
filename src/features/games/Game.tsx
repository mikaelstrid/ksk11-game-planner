import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import TeamHelper from "../../helpers/team.helper";
import { selectTeams } from "../teams/teamsSlice";
import { addRoosterToGame, selectGames } from "./gamesSlice";
import Rooster from "./Rooster";

function Game() {
  const dispatch = useAppDispatch();
  const games = useAppSelector(selectGames);
  const teams = useAppSelector(selectTeams);
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
