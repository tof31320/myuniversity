export class TypeBatiment {
  id: number = 0;
  nom: string = '';
  icon: string = '';
  price: number = 0;
  size: number = 0;

  static parseFromJSON(json: Object): TypeBatiment  {
    let t = new TypeBatiment();
    t.id = json['id'];
    t.nom = json['nom'];
    t.icon = json['icon'];
    t.price = json['price'];
    t.size = json['size'];

    return t;
  }

  toJSON(){
    return {
      id: this.id,
      nom: this.nom,
      icon: this.icon,
      price: this.price,
      size: this.size
    }
  }
}
