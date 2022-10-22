export interface ITeam {
  id: string;
  name: string;
}

export interface IPlayer {
  id: string;
  number: number;
  name: string;
}

export interface IGame {
  id: string;
  date: string;
  opponentId: string;
  isHomeGame: boolean;
  roosters: IRooster[];
}

export interface IRooster {
  id: string;
  players: string[];
}
