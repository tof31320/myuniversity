import { Player } from '../model/Player';
import { University } from '../model/University';
import { TypeBatiment } from '../model/TypeBatiment';
import { Batiment } from '../model/Batiment';

export class Game {
  player: Player = null;
  university: University = null;

  public static fromJSON(json: Object): Game {
    let g: Game = new Game();

    g.player = Player.fromJSON(json['player']);
    g.university = University.fromJSON(json['university']);

    return g;
  }

  constructor(){
    this.player = new Player();
    this.university = new University();
  }

  canBuild(type: TypeBatiment): boolean {
    return this.player.money >= type.price
    && this.university.usedSpace() + type.size <= this.university.areaSize;
  }

  build(type: TypeBatiment){
    let bat = new Batiment();
    bat.id = Date.now();
    bat.nom = type.nom;
    bat.type = type;

    this.university.batiments.push(bat);

    this.player.money -= bat.type.price;

    console.log(this.university);
  }
}
