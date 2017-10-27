import { Batiment } from './Batiment';
import { Formation } from './Formation';
import { Employee } from './Employee';
import { DB } from './DB';

export class University {
  id: number = 0;
  name: string = '';
  areaSize: number = 20;

  batiments: Batiment[] = new Array();
  formations: Formation[] = new Array();
  employees: Employee[] = new Array();

  static fromJSON(json: Object): University {
    let u: University = new University();
    u.name = json['name'];
    u.areaSize = json['areaSize'];

    u.batiments = json['batiments'].map(bid => {
      let bat = DB.findBatimentById(bid);
      if(bat == null){
        bat = new Batiment();
        bat.id = bid;
        return bat;
      }else{
        return bat;
      }
    });
   
    u.formations = json['formations'].map(fid => {
      let f = DB.findFormationById(fid);
      if(f == null){
        f = new Formation();
        f.id = fid;
        return f;
      }else{
        return f;
      }
    });
    
    u.employees = json['employees'].map(eid => {
      let e = DB.findEmployeeById(eid);
      if(e == null){
        e = new Employee();
        e.id = eid;
        return e;
      }else{
        return e;
      }
    });
    return u;
  }

  usedSpace(): number {
    let n: number = 0;
    for(let i = 0; i<this.batiments.length; i++){
      n += this.batiments[i].type.size;
    }
    return n;
  }

  toJSON(){
    return {
      id: this.id,
      name: this.name,
      areaSize: this.areaSize,
      batiments: this.batiments.map(b => b.id),
      formations: this.formations.map(f => f.id),
      employees: this.employees.map(e => e.id)
    }
  }

  findBatimentById(id: number){
    
    for(let i = 0; i < this.batiments.length; i++){      
      if(this.batiments[i].id === id){
        return this.batiments[i];
      } 
    }
    return null;
  }
}
