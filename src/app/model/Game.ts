import { Player } from '../model/Player';
import { University } from '../model/University';

export class Game {
  player: Player = null;
  university: University = null;

  constructor(){
    this.player = new Player();
    this.university = new University();
  }
}
