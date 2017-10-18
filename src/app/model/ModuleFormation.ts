import { Employee } from './Employee';
import { Util } from './Util';

export class ModuleFormation {
    id: number = 0;
    nom: string = '';
    hVol: number = 1;

    teachers: Employee[] = new Array();

    static fromJSON(json: Object) : ModuleFormation {
        let m: ModuleFormation = new ModuleFormation();
        Object.assign(m, json);

        m.teachers = new Array();
        for(let i = 0;  json['teachers'] && i < json['teachers'].length; i++){
          let emp: Employee = Employee.fromJSON(json['teachers'][i]);
          m.teachers.push(emp);
        }
        return m;
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
