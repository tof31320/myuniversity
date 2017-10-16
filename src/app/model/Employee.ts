
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
    
    static fromJSON(json: Object){
        let e: Employee = new Employee();
        Object.assign(e, json);
        return e;
    }   
}