import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useAppDispatch } from "../../app/hooks";
import { add } from "./teamsSlice";

function NewTeam() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const onNameChanged = (e: React.FormEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);

  const onSaveClicked = () => {
    if (name) {
      dispatch(add({ id: nanoid(), name }));
      setName("");
      navigate(`/teams`);
    }
  };

  return (
    <div>
      <section>
        <h2>Nytt lag</h2>
        <Form>
          <FormGroup className="mb-3">
            <Label for="name">Namn</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={onNameChanged}
            />
          </FormGroup>
          <Button type="button" color="primary" onClick={onSaveClicked}>
            Spara
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default NewTeam;
