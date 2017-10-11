"use strict";
var TypeBatiment = (function () {
    function TypeBatiment() {
        this.id = 0;
        this.nom = '';
        this.icon = '';
        this.price = 0;
        this.size = 0;
    }
    TypeBatiment.parseFromJSON = function (json) {
        var t = new TypeBatiment();
        t.id = json['id'];
        t.nom = json['nom'];
        t.icon = json['icon'];
        t.price = json['price'];
        t.size = json['size'];
        return t;
    };
    return TypeBatiment;
}());
exports.TypeBatiment = TypeBatiment;
//# sourceMappingURL=TypeBatiment.js.map