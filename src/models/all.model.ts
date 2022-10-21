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
  date: string;
  opponentId: number;
  isHomeGame: boolean;
}

export interface IActivities {
  games: IGame[];
}
