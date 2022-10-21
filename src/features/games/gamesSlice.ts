import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IGame } from "../../models/all.model";

export interface GamesState {
  games: IGame[];
}

const initialState: GamesState = {
  games: [
    {
      id: 1,
      date: new Date().toISOString().substring(0, 10),
      opponentId: 1,
      isHomeGame: true,
    },
    {
      id: 2,
      date: new Date().toISOString().substring(0, 10),
      opponentId: 2,
      isHomeGame: true,
    },
  ],
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IGame>) => {
      state.games.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.games = state.games.filter((p) => p.id !== action.payload);
    },
  },
});

export const { add, remove } = gamesSlice.actions;

export const selectGames = (state: RootState) => state.games.games;
export const selectNextGameId = (state: RootState) =>
  state.games.games.map((t) => t.id).reduce((a, b) => Math.max(a, b)) + 1;

export default gamesSlice.reducer;
