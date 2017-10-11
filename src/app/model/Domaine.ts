export class Domaine {
    id: number = 0;
    nom: string = '';

    static fromJSON(json: Object): Domaine {
        let d: Domaine = new Domaine();
        Object.assign(d, json);
        return d;
    }
}