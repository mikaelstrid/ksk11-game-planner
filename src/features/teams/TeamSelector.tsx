import React from "react";
import { Input } from "reactstrap";
import { useAppSelector } from "../../app/hooks";
import { selectTeams } from "./teamsSlice";

function TeamSelector({
  id,
  value,
  onChange,
}: {
  id: string;
  value: number | undefined;
  onChange: (value: number) => void;
}) {
  const teams = useAppSelector(selectTeams);
  return (
    <Input
      id={id}
      type="select"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
    >
      <option value={-1}>- Välj lag -</option>
      {teams.map((team) => (
        <option key={`${team.id}`} value={team.id}>
          {team.name}
        </option>
      ))}
    </Input>
  );
}

export default TeamSelector;
