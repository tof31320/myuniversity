import { Game } from './Game';
import { DB } from './DB';

export class GameSave {
  id: number = 0;
  title: string = 'Another Game Save !';
  date: Date;
  game: Game;
  datas: Object;

  static fromJSON(json: Object): GameSave {
    let gs: GameSave = new GameSave(Game.fromJSON(json['game']));
    gs.id = json['id'];
    gs.title = json['title'];
    gs.date = json['date'];
    gs.datas = json['datas'];
    return gs;
  }

  toJSON() {
    let json = {
      id: this.id,
      title: this.title,
      date: this.date,
      game: this.game.toJSON(),
      datas: DB.saveToJSON()
    };
    return json;
  }

  constructor(game: Game){
    this.id = Date.now();
    this.game = game;
    this.date = new Date();
  }
}
