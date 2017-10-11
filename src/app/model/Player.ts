export class Player {
  name: string = '';
  money: number = 0;

  static fromJSON(json: Object): Player {
    let p: Player = new Player();
    Object.assign(p, json);
    return p;
  }

  constructor(){
    this.money = 3000;
  }


}
