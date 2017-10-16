"use strict";
var Profession = (function () {
    function Profession() {
        this.id = 0;
        this.nom = '';
    }
    Profession.fromJSON = function (json) {
        var p = new Profession();
        Object.assign(p, json);
        return p;
    };
    return Profession;
}());
exports.Profession = Profession;
var Employee = (function () {
    function Employee() {
        this.id = 0;
        this.nom = '';
        this.prenom = '';
        this.genre = 'M';
        this.avatar = '';
    }
    Employee.fromJSON = function (json) {
        var e = new Employee();
        Object.assign(e, json);
        return e;
    };
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map