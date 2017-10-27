export class NewGameOptions {
    nbOtherUniversities: number = 1;

    static fromJSON(json: Object): NewGameOptions {
        let opt: NewGameOptions = new NewGameOptions();
        Object.assign(opt, json);
        return opt;
    }

    toJSON(): Object {
        let json = {
            nbOtherUniversities: this.nbOtherUniversities
        };
        return json;
    }
}