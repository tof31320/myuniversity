import { University } from './University';
import { Formation } from './Formation';
import { ModuleFormation } from './ModuleFormation'; 
import { Domaine } from './Domaine';
import { DB } from './DB';

export class Student {
    id: number = 0;
    nom: string = '';
    prenom: string = '';

    university: University = null;
    formation: Formation = null;
    modules: ModuleFormation[] = new Array();

    interets: Domaine[] = new Array();

    static fromJSON(json: Object): Student {
        let s: Student = new Student();
        s.id = json['id'];
        s.nom = json['nom'];
        s.prenom = json['prenom'];
        s.university = DB.findUniversityById(json['universityId']);
        if(s.university == null){
            s.university = new University();
            s.university.id = json['universityId'];
        }

        s.formation = DB.findFormationById(json['formationId']);
        if(s.formation == null){
            s.formation = new Formation();
            s.formation.id = json['formationId'];
        }
        s.modules = json['modules'].map(m => {
            return ModuleFormation.fromJSON(m);
        });
        s.interets = json['interets'].map(i => {
            let d = DB.findDomaineById(i);
            if(d == null){
                d = new Domaine();
                d.id = i;
            }
            return d;
        });
        return s;
    }

    toJSON(): Object {
        return {
            id: this.id,
            nom: this.nom,
            prenom: this.prenom,
            universityId: this.university.id,
            formationId: this.formation.id,
            modules: this.modules,
            interets: this.interets.map(d => d.id)
        };
    }
}