import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Batiment } from './Batiment';
import { TypeBatiment } from './TypeBatiment';

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
}
