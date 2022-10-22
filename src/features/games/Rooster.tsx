import React, { useState } from "react";
import { Button } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IRooster } from "../../models/all.model";
import PlayerSelector from "../players/PlayerSelector";
import { selectPlayers } from "../players/playersSlice";
import { addPlayerToRooster, removePlayerFromRooster } from "./gamesSlice";

function Rooster({ gameId, rooster }: { gameId: string; rooster: IRooster }) {
  const dispatch = useAppDispatch();
  const players = useAppSelector(selectPlayers);
  const [playerId, setPlayerId] = useState("-1");

  return (
    <div>
      <h4>Laguppställning {rooster.id}</h4>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Nummer</th>
              <th>Namn</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rooster.players
              .map((id) => players.find((p) => p.id === id))
              .sort((a, b) => (a?.number ?? 0) - (b?.number ?? 0))
              .map((player) =>
                player ? (
                  <tr key={player.id}>
                    <td>{player.number}</td>
                    <td>{player.name}</td>
                    <td>
                      <Button
                        size="sm"
                        onClick={() =>
                          dispatch(
                            removePlayerFromRooster({
                              gameId,
                              roosterId: rooster.id,
                              playerId: player.id,
                            })
                          )
                        }
                      >
                        Ta bort
                      </Button>
                    </td>
                  </tr>
                ) : null
              )}
          </tbody>
        </table>
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
            setPlayerId("-1");
          }}
        >
          Lägg till
        </Button>
      </div>
    </div>
  );
}

export default Rooster;
