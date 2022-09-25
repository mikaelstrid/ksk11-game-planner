export interface ITeam {
  id: number;
  name: string;
}

export interface IPlayer {
  id: number;
  number: number;
  name: string;
}

export interface IGame {
  id: number;
  datetime: Date;
  opponent: ITeam;
  home: boolean;
}

export interface IActivities {
  games: IGame[];
}
