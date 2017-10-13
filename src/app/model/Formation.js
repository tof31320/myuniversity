"use strict";
var Domaine_1 = require("./Domaine");
var ModuleFormation_1 = require("./ModuleFormation");
var Formation = (function () {
    function Formation() {
        this.id = 0;
        this.intitule = '';
        this.modules = new Array();
    }
    Formation.fromJSON = function (json) {
        var f = new Formation();
        f.id = json['id'];
        f.intitule = json['intitule'];
        f.domaine = Domaine_1.Domaine.fromJSON(json['domaine']);
        f.modules = new Array();
        for (var i = 0; i < json['modules'].length; i++) {
            f.modules.push(ModuleFormation_1.ModuleFormation.fromJSON(json['modules'][i]));
        }
        return f;
    };
    Formation.prototype.addModule = function (m) {
        if (!this.containsModule(m)) {
            this.modules.push(m);
        }
    };
    Formation.prototype.removeModule = function (m) {
        var index = this.modules.indexOf(m);
        if (index >= 0) {
            this.modules.splice(index, 1);
        }
    };
    Formation.prototype.containsModule = function (m) {
        for (var i = 0; i < this.modules.length; i++) {
            if (this.modules[i].id === m.id) {
                return true;
            }
        }
        return false;
    };
    return Formation;
}());
exports.Formation = Formation;
//# sourceMappingURL=Formation.js.map