"use strict";
var Employee_1 = require("./Employee");
var Util_1 = require("./Util");
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
        m.teachers = new Array();
        for (var i = 0; json['teachers'] && i < json['teachers'].length; i++) {
            var emp = Employee_1.Employee.fromJSON(json['teachers'][i]);
            m.teachers.push(emp);
        }
        return m;
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