import { Player } from '../model/Player';
import { University } from '../model/University';
import { TypeBatiment } from '../model/TypeBatiment';
import { Batiment } from '../model/Batiment';
import { Formation } from '../model/Formation';
import { Employee } from '../model/Employee';

import { Util } from '../model/Util';

enum GamePhase {
  PRE_RENTREE,
  EN_COURS
};

export class Game {
  player: Player = null;
  university: University = null;
  phase: GamePhase = GamePhase.PRE_RENTREE;

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
