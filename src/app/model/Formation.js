"use strict";
var Domaine_1 = require("./Domaine");
var ModuleFormation_1 = require("./ModuleFormation");
var Util_1 = require("./Util");
var Batiment_1 = require("./Batiment");
var Formation = (function () {
    function Formation() {
        this.id = 0;
        this.intitule = '';
        this.modules = new Array();
        this.batiment = null;
    }
    Formation.fromJSON = function (json) {
        var f = new Formation();
        f.id = json['id'];
        f.intitule = json['intitule'];
        f.domaine = Domaine_1.Domaine.fromJSON(json['domaine']);
        f.modules = new Array();
        for (var i = 0; json['modules'] && i < json['modules'].length; i++) {
            f.modules.push(ModuleFormation_1.ModuleFormation.fromJSON(json['modules'][i]));
        }
        if (json['batiment']) {
            f.batiment = Batiment_1.Batiment.fromJSON(json['batiment']);
        }
        return f;
    };
    Formation.prototype.addModule = function (m) {
        if (!this.containsModule(m)) {
            this.modules.push(m);
        }
    };
    Formation.prototype.removeModule = function (m) {
        var index = Util_1.Util.indexOf(m, this.modules);
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
    Formation.prototype.totalHVolume = function () {
        var ret = 0;
        for (var i = 0; i < this.modules.length; i++) {
            ret = ret + this.modules[i].hVol;
        }
        return ret;
    };
    Formation.prototype.clone = function () {
        var f = Formation.fromJSON(JSON.parse(JSON.stringify(this)));
        return f;
    };
    return Formation;
}());
exports.Formation = Formation;
//# sourceMappingURL=Formation.js.map