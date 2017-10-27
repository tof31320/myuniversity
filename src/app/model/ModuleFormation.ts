import { Employee } from './Employee';
import { Util } from './Util';
import { DB } from './DB';

export class ModuleFormation {
    id: number = 0;
    nom: string = '';
    hVol: number = 1;

    teachers: Employee[] = new Array();

    static fromJSON(json: Object) : ModuleFormation {
        let m: ModuleFormation = new ModuleFormation();
        Object.assign(m, json);

        m.teachers = json['teachersId'].map(eid => {
          let e = DB.findEmployeeById(eid);
          if(e == null){
            e = new Employee();
            e.id = eid;
          }
          return e;
        });

        return m;
    }

    toJSON(){
      return {
        id: this.id,
        nom: this.nom,
        hVol: this.hVol,
        teachersId: this.teachers.map(e => e.id)
      }
    }

    clone(): ModuleFormation{
      return ModuleFormation.fromJSON(JSON.parse(JSON.stringify(this)));
    }

    removeTeacher(emp: Employee){
      let index: number = Util.indexOf(emp, this.teachers);
      if(index >= 0){
        this.teachers.splice(index, 1);
      }
    }
}
