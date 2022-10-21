import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectPlayers } from "./playersSlice";

function Players() {
  const players = useAppSelector(selectPlayers);
  // const dispatch = useAppDispatch();

  return (
    <>
      <h2>Spelare</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nummer</th>
            <th>Namn</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.number}</td>
              <td>{player.name}</td>
              {/* <td>
                <Button
                  color="primary"
                  size="sm"
                  onClick={() => dispatch(remove(player.id))}
                >
                  Ta bort
                </Button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Button
        color="primary"
        onClick={() =>
          dispatch(add({ id: 4, number: 4, name: "Albin Skogsberg" }))
        }
      >
        Lägg till spelare
      </Button> */}
    </>
  );
}

export default Players;
