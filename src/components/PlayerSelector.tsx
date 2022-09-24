import React from "react";
import { IPlayer } from "../models/all.model";

function PlayerSelector({
  selectedPlayer,
  players,
  handleSelectedPlayerChanged,
}: {
  selectedPlayer: number | undefined;
  players: IPlayer[];
  handleSelectedPlayerChanged: (value: number) => void;
}) {
  return (
    <select
      className="form-select"
      defaultValue={selectedPlayer}
      onChange={(e) => handleSelectedPlayerChanged(parseInt(e.target.value))}
    >
      <option value={-1}>- Välj spelare -</option>
      {players.map((player) => (
        <option key={`${player.id}`} value={player.id}>
          {`${player.number}. ${player.name}`}
        </option>
      ))}
    </select>
  );
}

export default PlayerSelector;
