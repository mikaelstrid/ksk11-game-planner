import React from "react";
import { useAppSelector } from "../../app/hooks";

function Players() {
  const players = useAppSelector((state) => state.players);

  return (
    <>
      <h2>Spelare</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nummer</th>
            <th>Namn</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.number}</td>
              <td>{player.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Players;
