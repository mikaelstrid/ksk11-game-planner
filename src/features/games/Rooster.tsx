import React, { useState } from "react";
import { Button } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IRooster } from "../../models/all.model";
import PlayerSelector from "../players/PlayerSelector";
import { selectPlayers } from "../players/playersSlice";
import { addPlayerToRooster } from "./gamesSlice";

function Rooster({ gameId, rooster }: { gameId: number; rooster: IRooster }) {
  const dispatch = useAppDispatch();
  const players = useAppSelector(selectPlayers);
  const [playerId, setPlayerId] = useState(-1);

  return (
    <div>
      <h4>Laguppställning {rooster.id}</h4>
      <div>
        {rooster.players
          .map((id) => players.find((p) => p.id === id))
          .map((player) => {
            return (
              <div key={player?.id}>
                {player?.number} {player?.name}
              </div>
            );
          })}
      </div>
      <div className="d-flex flex-row">
        <PlayerSelector
          id=""
          value={playerId}
          exludePlayerIds={rooster.players}
          onChange={setPlayerId}
        ></PlayerSelector>
        <Button
          className="ms-2 flex-shrink-0"
          onClick={(_) => {
            dispatch(
              addPlayerToRooster({ gameId, roosterId: rooster.id, playerId })
            );
            setPlayerId(-1);
          }}
        >
          Lägg till
        </Button>
      </div>
    </div>
  );
}

export default Rooster;
