"use strict";
var Domaine = (function () {
    function Domaine() {
        this.id = 0;
        this.nom = '';
    }
    Domaine.fromJSON = function (json) {
        var d = new Domaine();
        Object.assign(d, json);
        return d;
    };
    return Domaine;
}());
exports.Domaine = Domaine;
//# sourceMappingURL=Domaine.js.map