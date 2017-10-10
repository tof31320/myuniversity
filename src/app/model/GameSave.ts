import { Game } from './Game';

export class GameSave {
  id: number = 0;
  title: string = 'Another Game Save !';
  date: Date;
  game: Game;

  constructor(game: Game){
    this.id = Date.now();
    this.game = game;
    this.date = new Date();
  }
}
