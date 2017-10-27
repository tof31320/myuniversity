import { Domaine } from './Domaine';
import { ModuleFormation } from './ModuleFormation';
import { TypeBatiment } from './TypeBatiment';
import { Batiment } from './Batiment';
import { Employee, Profession } from './Employee';
import { Formation } from './Formation';
import { Student } from './Student';
import { University } from './University';

export class DB {

    // Données générales
    static firstnames: Object = {
        males: null,
        females: null
    };
    static lastnames: string[] = new Array();
    static avatars: Object = {
        males: null,
        females: null
    };

    static domaines: Domaine[] = new Array();
    static modules: ModuleFormation[] = new Array();
    static typesBatiment: TypeBatiment[] = new Array();
    static professions: Profession[] = new Array();

    // Données propres au jeu
    static batiments: Batiment[] = new Array();
    static employees: Employee[] = new Array();
    static formations: Formation[] = new Array();
    static students: Student[] = new Array();
    static universities: University[] = new Array();

    static currentId: number = 0;
    static nextId(): number {
        this.currentId = this.currentId + 1;
        return this.currentId;
    }

    // Acces par ID
    static findUniversityById(uId: number): University {
        for(let i = 0; i < DB.universities.length; i++){
            if(DB.universities[i].id === uId){
                return DB.universities[i];
            }
        }
        return null;
    }

    static findDomaineById(did: number): Domaine {
        let domaines = DB.domaines.filter(d => d.id === did);
        return domaines.length > 0 ? domaines[0] : null;
    }

    static findFormationById(fid: number): Formation {
        let formations = DB.formations.filter(f => {
            return f.id === fid;
        });
        return formations.length > 0 ? formations[0]: null;
    }

    static findTypeBatimentById(tid: number): TypeBatiment {
        let types = DB.typesBatiment.filter(t => t.id === tid);
        return types.length > 0 ? types[0] : null;
    }

    static findBatimentById(bid: number): Batiment {
        let batiments = DB.batiments.filter(b => b.id === bid);
        return batiments.length > 0 ? batiments[0] : null;
    }
    
    static findEmployeeById(eid: number): Employee {
        let employees = DB.employees.filter(e => e.id === eid);
        return employees.length > 0 ? employees[0] : null;
    }

    static findProfessionById(pid: number): Profession{
        let professions = DB.professions.filter(p => p.id === pid);
        return professions.length > 0 ? professions[0] : null;
    }

    static newUniversity(): University{
        let u: University = new University();
        u.id = DB.nextId();
        this.universities.push(u);
        
        return u;
    }

    static saveToJSON(): Object{
        return {
            batiments: DB.batiments.map(b => b.toJSON()),
            employees: DB.employees.map(e => e.toJSON()),
            formations: DB.formations.map(f => f.toJSON()),
            students: DB.students.map(s => s.toJSON()),
            universities: DB.universities.map(u => u.toJSON()),
            currentId: DB.currentId
        };
    }

    static loadFromJSON(json: Object){
        DB.batiments = json['batiments'].map(b => {
            return Batiment.fromJSON(b);
        });
        DB.employees = json['employees'].map(e => {
            return Employee.fromJSON(e);
        });
        DB.formations = json['formations'].map(f => {
            return Formation.fromJSON(f);
        });
        DB.students = json['students'].map(s => {
            return Student.fromJSON(s);
        })
        DB.universities = json['universities'].map(u => {
            return University.fromJSON(u);
        });
        DB.currentId = json['currentId'];

        // links
        DB.formations.forEach(f => {
            if(f.batiment){
                f.batiment = DB.findBatimentById(f.batiment.id);
            }
        });
        DB.students.forEach(s => {
            if(s.university){
                s.university = DB.findUniversityById(s.university.id);                
            }
            if(s.formation){
                s.formation = DB.findFormationById(s.formation.id);
            }
        });
        DB.universities.forEach(u => {
            u.formations = u.formations.map(f => DB.findFormationById(f.id));
            u.employees = u.employees.map(e => DB.findEmployeeById(e.id));
        });
    }    
}