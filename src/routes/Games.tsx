import React, { useEffect, useState } from "react";
import { IActivities, IGame } from "../models/all.model";
import { DataService } from "../services/data.service";

function Games() {
  const [activities, setActivities] = useState<IActivities>();

  useEffect(() => {
    setActivities(DataService.loadActivities());
  }, []);

  if (!activities) return <p>Laddar...</p>;

  return (
    <>
      <h2>Matcher</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Datum</th>
            <th>Motståndare</th>
          </tr>
        </thead>
        <tbody>
          {activities.games.map((game) => (
            <tr key={game.id}>
              <td>{game.datetime.toDateString()}</td>
              <td>{game.opponent.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Games;
