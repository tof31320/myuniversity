
import { DB } from './DB';

export class Profession {
    id: number = 0;
    nom: string = '';
   
    static fromJSON(json: Object){
        let p: Profession = new Profession();
        Object.assign(p, json);
        return p;
    }
}

export class Employee {
    id: number = 0;
    nom: string = '';
    prenom: string = ''; 
    genre: string = 'M';
    avatar: string = '';
    profession: Profession = null;

    static fromJSON(json: Object){
        let e: Employee = new Employee();
        Object.assign(e, json);

        e.profession = DB.findProfessionById(json['professionId']);
        if(e.profession == null){
            e.profession = new Profession();
            e.profession.id = json['professionId'];
        }
        return e;
    }   

    toJSON(){
        return {
            id: this.id,
            nom: this.nom,
            prenom: this.prenom,
            genre: this.genre,
            avatar: this.avatar,
            professionId: this.profession != null ? this.profession.id : null
        }
    }
}