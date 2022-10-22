import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { update } from "./teamsSlice";

function EditTeam() {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const team = useAppSelector((state) => state.teams.find((a) => a.id === id));

  const [name, setName] = useState(team?.name ?? "");

  if (!team) return <p>404</p>;

  const onNameChanged = (e: React.FormEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);

  const onSaveClicked = () => {
    if (name && name !== team.name) {
      dispatch(update({ ...team, name }));
    }
  };

  return (
    <div>
      <section>
        <h2>Redigera lag</h2>
        <Form>
          <FormGroup>
            <Label for="name">Namn</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={onNameChanged}
            />
          </FormGroup>
        </Form>
        <Button type="button" color="primary" onClick={onSaveClicked}>
          Spara
        </Button>
      </section>
    </div>
  );
}

export default EditTeam;
