"use strict";
var DB_1 = require("./DB");
var Batiment = (function () {
    function Batiment() {
        this.id = 0;
        this.nom = '';
        this.type = null;
    }
    Batiment.fromJSON = function (json) {
        var b = new Batiment();
        b.id = json['id'];
        b.nom = json['nom'];
        b.type = DB_1.DB.findTypeBatimentById(json['typeId']);
        return b;
    };
    Batiment.prototype.toJSON = function () {
        return {
            id: this.id,
            nom: this.nom,
            typeId: this.type != null ? this.type.id : null
        };
    };
    return Batiment;
}());
exports.Batiment = Batiment;
//# sourceMappingURL=Batiment.js.map