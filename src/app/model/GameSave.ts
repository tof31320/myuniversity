import { Game } from './Game';

export class GameSave {
  id: number = 0;
  title: string = 'Another Game Save !';
  date: Date;
  game: Game;

  static fromJSON(json: Object): GameSave {
    let gs: GameSave = new GameSave(Game.fromJSON(json['game']));
    gs.id = json['id'];
    gs.title = json['title'];
    gs.date = json['date'];

    return gs;
  }

  constructor(game: Game){
    this.id = Date.now();
    this.game = game;
    this.date = new Date();
  }
}
