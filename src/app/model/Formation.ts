import { Domaine } from './Domaine';
import { ModuleFormation } from './ModuleFormation';

export class Formation {
  id: number = 0;
  intitule: string = '';
  domaine: Domaine;
  modules: ModuleFormation[] = new Array();

  static fromJSON(json: Object){
    let f: Formation = new Formation();
    f.id = json['id'];
    f.intitule = json['intitule'];
    f.domaine = Domaine.fromJSON(json['domaine']);

    f.modules = new Array();
    for(let i = 0; i < json['modules'].length; i++){
      f.modules.push(ModuleFormation.fromJSON(json['modules'][i]));
    }

    return f;
  }

  addModule(m: ModuleFormation){
    if(!this.containsModule(m)){
      this.modules.push(m);
    }
  }

  removeModule(m: ModuleFormation){
    let index: number = this.modules.indexOf(m);

    if(index >= 0){
      this.modules.splice(index, 1);
    }
  }

  containsModule(m: ModuleFormation){
    for(let i = 0; i < this.modules.length; i++){
      if(this.modules[i].id === m.id){
        return true;
      }
    }
    return false;
  }
}
