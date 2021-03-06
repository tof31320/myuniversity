export class Domaine {
    id: number = 0;
    nom: string = '';
    nbModulesMin: number = 0;
    nbModulesMax: number = 0;

    static fromJSON(json: Object){
        let d:Domaine = new Domaine();
        Object.assign(d, json);
        return d;
    }

    toJSON(){
        return {
            id: this.id,
            nom: this.nom,
            nbModulesMin: this.nbModulesMin,
            nbModulesMax: this.nbModulesMax
        }
    }
}
