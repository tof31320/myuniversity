"use strict";
var Employee_1 = require("./Employee");
var Util_1 = require("./Util");
var DB_1 = require("./DB");
var ModuleFormation = (function () {
    function ModuleFormation() {
        this.id = 0;
        this.nom = '';
        this.hVol = 1;
        this.teachers = new Array();
    }
    ModuleFormation.fromJSON = function (json) {
        var m = new ModuleFormation();
        Object.assign(m, json);
        m.teachers = json['teachersId'].map(function (eid) {
            var e = DB_1.DB.findEmployeeById(eid);
            if (e == null) {
                e = new Employee_1.Employee();
                e.id = eid;
            }
            return e;
        });
        return m;
    };
    ModuleFormation.prototype.toJSON = function () {
        return {
            id: this.id,
            nom: this.nom,
            hVol: this.hVol,
            teachersId: this.teachers.map(function (e) { return e.id; })
        };
    };
    ModuleFormation.prototype.clone = function () {
        return ModuleFormation.fromJSON(JSON.parse(JSON.stringify(this)));
    };
    ModuleFormation.prototype.removeTeacher = function (emp) {
        var index = Util_1.Util.indexOf(emp, this.teachers);
        if (index >= 0) {
            this.teachers.splice(index, 1);
        }
    };
    return ModuleFormation;
}());
exports.ModuleFormation = ModuleFormation;
//# sourceMappingURL=ModuleFormation.js.map