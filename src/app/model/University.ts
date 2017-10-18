import { Batiment } from './Batiment';
import { Formation } from './Formation';
import { Employee } from './Employee';

export class University {
  name: string = '';
  areaSize: number = 20;

  batiments: Batiment[] = new Array();
  formations: Formation[] = new Array();
  employees: Employee[] = new Array();

  static fromJSON(json: Object): University {
    let u: University = new University();
    u.name = json['name'];
    u.areaSize = json['areaSize'];

    for(let i = 0; i < json['batiments'].length; i++){
      let b: Batiment = Batiment.fromJSON(json['batiments'][i]);

      u.batiments.push(b);
    }

    u.formations = new Array();
    for(let i = 0; i < json['formations'].length; i++){
      let f: Formation = Formation.fromJSON(json['formations'][i]);
      u.formations.push(f);
    }

    u.employees = new Array();
    for(let i = 0; i < json['employees'].length; i++){
      let e: Employee = Employee.fromJSON(json['employees'][i]);
      u.employees.push(e);
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
