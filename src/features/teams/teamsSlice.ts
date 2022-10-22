import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ITeam } from "../../models/all.model";

export type TeamsState = ITeam[];

const initialState: TeamsState = [
  { id: 1, name: "Stenungsund Stingers" },
  { id: 2, name: "Lerum BK" },
];

export const TeamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ITeam>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((p) => p.id !== action.payload);
    },
    update: (state, action: PayloadAction<ITeam>) => {
      const index = state.findIndex((p) => p.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

export const { add, remove, update } = TeamsSlice.actions;

export const selectTeams = (state: RootState) => state.teams;
export const selectNextTeamId = (state: RootState) =>
  state.teams.map((t) => t.id).reduce((a, b) => Math.max(a, b)) + 1;

export default TeamsSlice.reducer;
