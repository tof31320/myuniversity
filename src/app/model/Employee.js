"use strict";
var DB_1 = require("./DB");
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
        this.profession = null;
    }
    Employee.fromJSON = function (json) {
        var e = new Employee();
        Object.assign(e, json);
        e.profession = DB_1.DB.findProfessionById(json['professionId']);
        if (e.profession == null) {
            e.profession = new Profession();
            e.profession.id = json['professionId'];
        }
        return e;
    };
    Employee.prototype.toJSON = function () {
        return {
            id: this.id,
            nom: this.nom,
            prenom: this.prenom,
            genre: this.genre,
            avatar: this.avatar,
            professionId: this.profession != null ? this.profession.id : null
        };
    };
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map