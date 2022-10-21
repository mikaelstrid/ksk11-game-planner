import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IPlayer } from "../../models/all.model";

export interface PlayersState {
  players: IPlayer[];
}

const initialState: PlayersState = {
  players: [
    { id: 1, number: 1, name: "Rasmus M" },
    { id: 2, number: 2, name: "Karl" },
    { id: 3, number: 3, name: "Max DP" },
    { id: 4, number: 4, name: "Albin" },
    { id: 6, number: 6, name: "Edvin" },
    { id: 7, number: 7, name: "Anton J" },
    { id: 8, number: 8, name: "Casper" },
    { id: 9, number: 9, name: "Anton O" },
    { id: 10, number: 10, name: "Alexander C" },
    { id: 11, number: 11, name: "Benjamin" },
    { id: 12, number: 12, name: "Dexter" },
    { id: 13, number: 13, name: "Texas" },
    { id: 14, number: 14, name: "Nico" },
    { id: 17, number: 17, name: "Alexander A" },
    { id: 18, number: 18, name: "Max C" },
    { id: 19, number: 19, name: "Celvin" },
    { id: 20, number: 20, name: "Melvin" },
    { id: 21, number: 21, name: "Emil B" },
    { id: 22, number: 22, name: "Vilmer" },
    { id: 23, number: 23, name: "Neo" },
    { id: 25, number: 25, name: "Lukas" },
    { id: 26, number: 26, name: "Rasmus K" },
    { id: 28, number: 28, name: "Emil S" },
    { id: 29, number: 29, name: "Sam" },
    { id: 30, number: 30, name: "Linus" },
    { id: 33, number: 33, name: "Santino" },
    { id: 34, number: 34, name: "Emil L" },
    { id: 35, number: 35, name: "Jonathan" },
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
