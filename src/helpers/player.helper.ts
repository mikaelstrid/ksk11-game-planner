import { IGame } from "../models/all.model";

export default class PlayerHelper {
  //   static getPlayer(id: IPlayer[], teamId: number): IPlayer[] {
  //     return players.filter((p) => p.teamId === teamId);
  //   }

  static getNumberOfGames(playerId: string, games: IGame[]): number {
    return games.filter((game) =>
      game.roosters.some((rooster) =>
        rooster.players.some((player) => player === playerId)
      )
    ).length;
  }
}
