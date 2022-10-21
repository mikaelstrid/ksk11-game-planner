import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import TeamSelector from "../teams/TeamSelector";
import { add, selectNextGameId } from "./gamesSlice";

function NewGame() {
  const dispatch = useAppDispatch();
  const nextTeamId = useAppSelector(selectNextGameId);

  const [opponentId, setOpponentId] = useState(-1);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [isHomeGame, setIsHomeGame] = useState(true);

  const onSaveClicked = () => {
    if (opponentId !== -1 && date) {
      dispatch(
        add({
          id: nextTeamId,
          date: date,
          opponentId,
          isHomeGame,
        })
      );
      setOpponentId(-1);
      setIsHomeGame(true);
    }
  };

  return (
    <div>
      <section>
        <h2>Ny match</h2>
        <Form>
          <FormGroup>
            <Label for="opponent">Motståndare</Label>
            <TeamSelector
              id="opponent"
              selectedValue={opponentId}
              handleSelectedValueChanged={setOpponentId}
            />
          </FormGroup>
          <FormGroup>
            <Label for="date">Datum</Label>
            <Input
              type="text"
              id="date"
              value={date}
              onChange={(e) => {
                setDate(e.currentTarget.value);
              }}
            />
          </FormGroup>
          <FormGroup check className="mb-3">
            <Input
              type="checkbox"
              checked={isHomeGame}
              onChange={(e) => {
                setIsHomeGame(e.currentTarget.checked);
              }}
            />{" "}
            <Label check>Hemmamatch</Label>
          </FormGroup>
          <Button type="button" color="primary" onClick={onSaveClicked}>
            Spara
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default NewGame;
