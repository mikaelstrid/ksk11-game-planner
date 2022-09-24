import React from "react";
import Players from "./components/Players";
import { DataService } from "./services/data.service";

function App() {
  const players = DataService.getPlayers();
  return (
    <div className="App">
      <div className="container">
        <Players></Players>
      </div>
    </div>
  );
}

export default App;
