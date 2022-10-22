import React from "react";
import { Input } from "reactstrap";
import { useAppSelector } from "../../app/hooks";
import { selectPlayers } from "./playersSlice";

function PlayerSelector({
  id,
  value,
  exludePlayerIds,
  onChange,
}: {
  id: string;
  value: string | undefined;
  exludePlayerIds?: string[];
  onChange: (value: string) => void;
}) {
  const players = useAppSelector(selectPlayers);
  return (
    <Input
      id={id}
      type="select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value={-1}>- Välj spelare -</option>
      {players
        .filter((player) => !exludePlayerIds?.some((id) => id === player.id))
        .map((player) => (
          <option key={`${player.id}`} value={player.id}>
            {`${player.number}. ${player.name}`}
          </option>
        ))}
    </Input>
  );
}

export default PlayerSelector;
