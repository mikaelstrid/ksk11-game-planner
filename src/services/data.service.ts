import { IActivities, IPlayer } from "../models/all.model";

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

  public static loadActivities(): IActivities {
    try {
      const temp = localStorage.getItem("ksk11-game-planner.activities");
      if (!temp) {
        return this.createEmptyActivities();
      }
      return JSON.parse(temp);
    } catch {
      console.log("Could not load schedule");
      return this.createEmptyActivities();
    }
  }

  //   public static saveSchedule(schedule: ISchedule): void {
  //     localStorage.setItem("kit.schedule", JSON.stringify(schedule));
  //   }

  private static createEmptyActivities(): IActivities {
    return {
      games: [
        {
          id: 1,
          datetime: new Date(),
          opponent: { id: 1, name: "Stenungsund Stingers" },
          home: true,
        },
        {
          id: 2,
          datetime: new Date(),
          opponent: { id: 2, name: "Lerum BK" },
          home: true,
        },
      ],
    };
  }
}
