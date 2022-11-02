import React from "react";
import { useAppSelector } from "../../app/hooks";
import PlayerHelper from "../../helpers/player.helper";

function PlayersSummary() {
  const players = useAppSelector((state) => state.players);
  const games = useAppSelector((state) => state.games);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Nummer</th>
          <th>Namn</th>
          <th>Matcher</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.id}>
            <td>{player.number}</td>
            <td>{player.name}</td>
            <td>{PlayerHelper.getNumberOfGames(player.id, games)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlayersSummary;
