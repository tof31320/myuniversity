"use strict";
var TypeBatiment_1 = require("./TypeBatiment");
var Batiment = (function () {
    function Batiment() {
        this.id = 0;
        this.nom = '';
    }
    Batiment.fromJSON = function (json) {
        var b = new Batiment();
        b.id = json['id'];
        b.nom = json['nom'];
        b.type = TypeBatiment_1.TypeBatiment.parseFromJSON(json['type']);
        return b;
    };
    return Batiment;
}());
exports.Batiment = Batiment;
//# sourceMappingURL=Batiment.js.map