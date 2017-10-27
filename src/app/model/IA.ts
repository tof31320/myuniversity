import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Random } from '../model/Random';
import { Employee, Profession } from './Employee';
import { University } from './University';
import { Formation } from './Formation';
import { DB } from './DB';

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

    createUniversity(): University {
        let u: University = new University();
        u.id = DB.nextId();
        u.name = "University " + Random.randomNumber(1,100);
        
        let nbFormations: number = Random.randomNumber(1,5);
        for(let i = 0; i < nbFormations; i++){
            let f: Formation = this.createFormation();

            u.formations.push(f);
        }

        return u;
    }   

    createFormation(): Formation {
        let f: Formation = new Formation();

        f.id = DB.nextId();
        f.intitule = "Formation " + Random.randomNumber(1,1000);
        
        f.modules = new Array();

        return f;
    }
}