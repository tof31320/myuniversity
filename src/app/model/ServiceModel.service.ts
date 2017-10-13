import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Batiment } from './Batiment';
import { TypeBatiment } from './TypeBatiment';
import { Domaine } from './Domaine';
import { ModuleFormation } from './ModuleFormation';

@Injectable()
export class ServiceModel {

  constructor(private http: Http){}

  getAllTypesBatiment() {
    return this.http.get('data/types-batiment.json')
      .map(response => {
        let types: TypeBatiment[] = new Array();
        let json = response.json();

        for(let i = 0; i < json.length; i++){
          types.push(TypeBatiment.parseFromJSON(json[i]));
        }
        console.log(types);

        return types;
      });
  }

  getAllDomaines(){
    return this.http.get('data/domaines-modules.json')
      .map(resp => {
        let domaines: Domaine[] = new Array();
        let json = resp.json().domaines;

        for(let i = 0; i < json.length; i++){
          domaines.push(Domaine.fromJSON(json[i]));
        }

        return domaines;
      });
  }

  getAllModulesFormation(){
    return this.http.get('data/domaines-modules.json')
      .map(resp => {
        let modules: ModuleFormation[] = new Array();
        let json = resp.json().modules;

        for(let i = 0; i < json.length; i++){
          modules.push(ModuleFormation.fromJSON(json[i]));
        }

        return modules;
      });
  }
}
