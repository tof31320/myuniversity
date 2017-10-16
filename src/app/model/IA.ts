import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Random } from '../model/Random';
import { Employee, Profession } from './Employee';

@Injectable()
export class IAService {

    constructor(private http: Http){              
    }

    createPerson(params: Object): Object {        

        let person: Object;
        if(params && params['personType'] && params['personType'] === 'employee'){
            person = new Employee();
            person['id'] = Date.now();
            person['nom'] = Random.randomLastname();
            person['genre'] = Random.randomNumber(0, 1) === 1 ? 'M' : 'F';
            person['prenom'] = Random.randomFirstname(person['genre']);
            person['avatar'] = Random.randomAvatar(person['genre']);
            
        }else{
            person = null;
        }
        return person;
    }

    createPersons(nb: number, params: Object): any[] {
        let ret:Object[] = new Array();
        for(let i = 0; i < nb; i++){
            let p = this.createPerson(params);
            console.log(p);
            ret.push(p);
        }
        return ret;
    }
}