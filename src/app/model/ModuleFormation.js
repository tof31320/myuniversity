"use strict";
var ModuleFormation = (function () {
    function ModuleFormation() {
        this.id = 0;
        this.nom = '';
    }
    ModuleFormation.fromJSON = function (json) {
        var m = new ModuleFormation();
        Object.assign(m, json);
        return m;
    };
    return ModuleFormation;
}());
exports.ModuleFormation = ModuleFormation;
//# sourceMappingURL=ModuleFormation.js.map