import { TypeBatiment } from './TypeBatiment';

export class Batiment {
  id: number = 0;
  nom: string = '';
  type: TypeBatiment;

  static fromJSON(json: Object){
    let b: Batiment = new Batiment();
    b.id = json['id'];
    b.nom = json['nom'];
    b.type = TypeBatiment.parseFromJSON(json['type']);

    return b;
  }
}
