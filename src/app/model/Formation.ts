import { Domaine } from './Domaine';
import { ModuleFormation } from './ModuleFormation';
import { Util } from './Util';
import { Batiment } from './Batiment';
import { DB } from './DB';

export class Formation {
  id: number = 0;
  intitule: string = '';
  domaine: Domaine;
  modules: ModuleFormation[] = new Array();
  batiment: Batiment = null;

  static fromJSON(json: Object){
    let f: Formation = new Formation();
    f.id = json['id'];
    f.intitule = json['intitule'];

    f.domaine = DB.findDomaineById(json['domaine']);

    f.modules = new Array();
    for(let i = 0; json['modules'] && i < json['modules'].length; i++){
      f.modules.push(ModuleFormation.fromJSON(json['modules'][i]));
    }

    if(json['batiment']){
      f.batiment = Batiment.fromJSON(json['batiment']);
    }

    return f;
  }

  toJSON(){
    return {
      id: this.id,
      intitule: this.intitule,
      domaineId: this.domaine != null ? this.domaine.id : null,
      modules: this.modules.map(m => m.toJSON()),
      batimentId: this.batiment != null ? this.batiment.id : null
    }
  }

  addModule(m: ModuleFormation){
    if(!this.containsModule(m)){
      this.modules.push(m);
    }
  }

  removeModule(m: ModuleFormation){
    let index: number = Util.indexOf(m, this.modules);

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

  totalHVolume(): number{
    let ret: number = 0;
    for(let i = 0; i < this.modules.length; i++){
      ret = ret + this.modules[i].hVol;
    }
    return ret;
  }

  clone(): Formation {
    let f: Formation = Formation.fromJSON(JSON.parse(JSON.stringify(this)));
    return f;
  }
}
