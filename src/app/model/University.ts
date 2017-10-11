import { Batiment } from './Batiment';

export class University {
  name: string = '';
  areaSize: number = 20;

  batiments: Batiment[] = new Array();

  static fromJSON(json: Object): University {
    let u: University = new University();
    u.name = json['name'];
    u.areaSize = json['areaSize'];

    for(let i = 0; i < json['batiments'].length; i++){
      let b: Batiment = Batiment.fromJSON(json['batiments'][i]);

      u.batiments.push(b);
    }
    return u;
  }

  usedSpace(): number {
    let n: number = 0;
    for(let i = 0; i<this.batiments.length; i++){
      n += this.batiments[i].type.size;
    }
    return n;
  }
}
