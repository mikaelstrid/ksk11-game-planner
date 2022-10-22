import React from "react";
import { Input } from "reactstrap";
import { useAppSelector } from "../../app/hooks";

function TeamSelector({
  id,
  value,
  onChange,
}: {
  id: string;
  value: string | undefined;
  onChange: (value: string) => void;
}) {
  const teams = useAppSelector((state) => state.teams);

  return (
    <Input
      id={id}
      type="select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
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
