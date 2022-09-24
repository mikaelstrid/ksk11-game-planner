import { IPlayer } from "../models/all.model";

export class DataService {
  //   private static callbackFn: () => void;

  public static getPlayers(): IPlayer[] {
    return [
      { id: 1, number: 1, name: "Lukas" },
      { id: 2, number: 2, name: "Karl" },
    ];
  }

  //   public static registerUpdateCallback(callbackFn: () => void): void {
  //     DataService.callbackFn = callbackFn;
  //   }

  //   public static updateGame(game: IGame): void {
  //     const schedule = DataService.loadSchedule();
  //     for (let i = 0; i < schedule.rounds.length; i++) {
  //       const round = schedule.rounds[i];
  //       if (round.game1.id === game.id) {
  //         round.game1 = game;
  //         break;
  //       }
  //       if (round.game2.id === game.id) {
  //         round.game2 = game;
  //         break;
  //       }
  //       if (round.game3.id === game.id) {
  //         round.game3 = game;
  //         break;
  //       }
  //     }
  //     DataService.saveSchedule(schedule);
  //     if (DataService.callbackFn) DataService.callbackFn();
  //   }

  //   public static loadSchedule(): ISchedule {
  //     try {
  //       const temp = localStorage.getItem("kit.schedule");
  //       if (!temp) {
  //         console.log("No data found");
  //         return this.createEmptySchedule();
  //       }
  //       return JSON.parse(temp);
  //     } catch {
  //       console.log("Could not load schedule");
  //       return this.createEmptySchedule();
  //     }
  //   }

  //   public static saveSchedule(schedule: ISchedule): void {
  //     localStorage.setItem("kit.schedule", JSON.stringify(schedule));
  //   }
}
