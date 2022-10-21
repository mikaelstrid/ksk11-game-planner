import React from "react";
import { Input } from "reactstrap";
import { useAppSelector } from "../../app/hooks";
import { selectTeams } from "./teamsSlice";

function TeamSelector({
  id,
  selectedValue,
  handleSelectedValueChanged,
}: {
  id: string;
  selectedValue: number | undefined;
  handleSelectedValueChanged: (value: number) => void;
}) {
  const teams = useAppSelector(selectTeams);
  return (
    <Input
      id="{id}"
      type="select"
      defaultValue={selectedValue}
      onChange={(e) => handleSelectedValueChanged(parseInt(e.target.value))}
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
