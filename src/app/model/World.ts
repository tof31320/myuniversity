import { University } from './University';
import { Student } from './Student';
import { DB } from './DB';

export class World {

    universities: University[] = new Array();
    poolStudents: Student[] = new Array();

    static fromJSON(json: Object): World {
        let w: World = new World();

        w.universities = new Array();
        for(let i  = 0; i < json['universities'].length; i++){
            //let u: University = University.fromJSON(json['universities'][i]);
            let u: University = DB.findUniversityById(json['universities'][i]);

            w.universities.push(u);
        }

        w.poolStudents = new Array();

        return w;
    }

    toJSON(): Object {
        let uIds: number[] = this.universities.map(function(u: University){
            return u.id;
        });

        let sIds: number[] = this.poolStudents.map(function(s: Student){
            return s.id;
        });

        let json = {
            universities: uIds,
            poolStudents: sIds
        };
        return json;
    }
}