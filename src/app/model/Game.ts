import { Player } from '../model/Player';
import { University } from '../model/University';
import { TypeBatiment } from '../model/TypeBatiment';
import { Batiment } from '../model/Batiment';
import { Formation } from '../model/Formation';
import { Employee } from '../model/Employee';
import { NewGameOptions } from './NewGameOptions';
import { World } from './World';
import { Util } from '../model/Util';
import { IAService } from '../model/IA';
import { DB } from '../model/DB';

enum GamePhase {
  PRE_RENTREE,
  EN_COURS
};

export class Game {
  player: Player = null;
  university: University = null;
  phase: GamePhase = GamePhase.PRE_RENTREE;
  options: NewGameOptions;
  world: World = new World();

  public static fromJSON(json: Object): Game {
    let g: Game = new Game();

    /*g.player = Player.fromJSON(json['player']);
    g.university = University.fromJSON(json['university']);
    g.options = NewGameOptions.fromJSON(json['options']);
    g.world = World.fromJSON(json['world']);
*/
    g.phase = json['phase'];
    g.player = Player.fromJSON(json['player']); 
    g.university = DB.findUniversityById(json['universityId']);
    if(g.university == null){
      g.university = new University();
      g.university.id = json['universityId'];
    }
    g.options = NewGameOptions.fromJSON(json['options']);
    g.world = World.fromJSON(json['world']);

    return g;
  }

  toJSON(): Object{
    let json = {
      phase: this.phase,
      player: this.player.toJSON(),
      universityId: this.university.id,
      options: this.options.toJSON(),
      world: this.world.toJSON()
    };

    return json;
  }

  constructor(){
    this.player = new Player();
    this.university = DB.newUniversity();
    this.world = new World();
    this.options = new NewGameOptions();    
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

  saveFormation(formation: Formation): boolean {
    if(formation.id === 0){
      // new
      formation.id = Date.now();
      this.university.formations.push(formation);
      
    }else{
      let index = Util.indexOf(formation, this.university.formations);

      if(index >= 0){
        this.university.formations[index] = formation;
      }
    }
    return true;
  }

  recrut(emp: Employee){
    this.university.employees.push(emp);
  }

  fire(emp: Employee){
    let index: number = Util.indexOf(emp, this.university.employees);
    if(index >= 0){
      this.university.employees.splice(index, 1);
    }
  }

  closeFormation(form: Formation){
    let index: number = Util.indexOf(form, this.university.formations);

    if(index >= 0){
      this.university.formations.splice(index, 1);
    }
  }

  tick(){
    console.log("TICK!");
  }
}
