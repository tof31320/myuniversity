import { University } from './University';
import { Formation } from './Formation';
import { ModuleFormation } from './ModuleFormation'; 
import { Domaine } from './Domaine';

export class Student {
    id: number = 0;
    nom: string = '';
    prenom: string = '';

    university: University = null;
    formation: Formation = null;
    modules: ModuleFormation[] = new Array();

    interets: Domaine[] = new Array();
}