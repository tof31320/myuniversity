import { TypeBatiment } from './TypeBatiment';
import { DB } from './DB';

export class Batiment {
  id: number = 0;
  nom: string = '';
  type: TypeBatiment = null;

  static fromJSON(json: Object){
    let b: Batiment = new Batiment();
    b.id = json['id'];
    b.nom = json['nom'];
    b.type = DB.findTypeBatimentById(json['typeId']);

    return b;
  }

  toJSON() {
    return {
      id: this.id,
      nom: this.nom,
      typeId: this.type != null ? this.type.id : null
    };
  }
}
