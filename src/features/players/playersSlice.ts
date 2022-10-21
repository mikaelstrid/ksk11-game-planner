import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IPlayer } from "../../models/all.model";

export interface PlayersState {
  players: IPlayer[];
}

const initialState: PlayersState = {
  players: [
    { id: 1, number: 1, name: "Lukas" },
    { id: 2, number: 2, name: "Karl" },
    { id: 3, number: 3, name: "Max dal Pozzo" },
  ],
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IPlayer>) => {
      state.players.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.players = state.players.filter((p) => p.id !== action.payload);
    },
  },
});

export const { add, remove } = playersSlice.actions;

export const selectPlayers = (state: RootState) => state.players.players;

export default playersSlice.reducer;
