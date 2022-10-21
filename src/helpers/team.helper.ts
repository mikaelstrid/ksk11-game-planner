import { ITeam } from "../models/all.model";

export default class TeamHelper {
  public static getTeamName(teamId: number, teams: ITeam[]): string {
    return teams.find((t) => t.id === teamId)?.name ?? "";
  }
}
