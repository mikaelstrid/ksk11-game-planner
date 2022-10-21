import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ITeam } from "../../models/all.model";

export interface TeamsState {
  teams: ITeam[];
}

const initialState: TeamsState = {
  teams: [
    { id: 1, name: "Stenungsund Stingers" },
    { id: 2, name: "Lerum BK" },
  ],
};

export const TeamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ITeam>) => {
      state.teams.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.teams = state.teams.filter((p) => p.id !== action.payload);
    },
    update: (state, action: PayloadAction<ITeam>) => {
      const index = state.teams.findIndex((p) => p.id === action.payload.id);
      state.teams[index] = action.payload;
    },
  },
});

export const { add, remove, update } = TeamsSlice.actions;

export const selectTeams = (state: RootState) => state.teams.teams;
export const selectNextTeamId = (state: RootState) =>
  state.teams.teams.map((t) => t.id).reduce((a, b) => Math.max(a, b)) + 1;

export default TeamsSlice.reducer;
