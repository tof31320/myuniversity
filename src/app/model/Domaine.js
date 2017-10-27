"use strict";
var Domaine = (function () {
    function Domaine() {
        this.id = 0;
        this.nom = '';
        this.nbModulesMin = 0;
        this.nbModulesMax = 0;
    }
    Domaine.fromJSON = function (json) {
        var d = new Domaine();
        Object.assign(d, json);
        return d;
    };
    Domaine.prototype.toJSON = function () {
        return {
            id: this.id,
            nom: this.nom,
            nbModulesMin: this.nbModulesMin,
            nbModulesMax: this.nbModulesMax
        };
    };
    return Domaine;
}());
exports.Domaine = Domaine;
//# sourceMappingURL=Domaine.js.map