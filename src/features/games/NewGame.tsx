import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useAppDispatch } from "../../app/hooks";
import TeamSelector from "../teams/TeamSelector";
import { add } from "./gamesSlice";

function NewGame() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [opponentId, setOpponentId] = useState("-1");
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [isHomeGame, setIsHomeGame] = useState(true);

  const onSaveClicked = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (opponentId !== "-1" && date) {
      const newGame = {
        id: nanoid(),
        date: date,
        opponentId,
        isHomeGame,
        roosters: [],
      };
      dispatch(add(newGame));
      setOpponentId("-1");
      setIsHomeGame(true);
      navigate(`/games/${newGame.id}`);
    }
  };

  return (
    <div>
      <section>
        <h2>Ny match</h2>
        <Form onSubmit={onSaveClicked}>
          <FormGroup>
            <Label for="opponent">Motståndare</Label>
            <TeamSelector
              id="opponent"
              value={opponentId}
              onChange={setOpponentId}
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
          <Button type="submit" color="primary">
            Spara
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default NewGame;
