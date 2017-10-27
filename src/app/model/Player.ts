export class Player {
  name: string = '';
  money: number = 0;

  static fromJSON(json: Object): Player {
    let p: Player = new Player();
    Object.assign(p, json);
    return p;
  }

  toJSON(): Object {
    let json = {
      name: this.name,
      money: this.money
    };
    return json;
  }

  constructor(){
    this.money = 3000;
  }


}
