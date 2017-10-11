export class ModuleFormation {
    id: number = 0;
    nom: string = '';

    static fromJSON(json: Object) : ModuleFormation {
        let m: ModuleFormation = new ModuleFormation();
        Object.assign(m, json);
        return m;
    }
}