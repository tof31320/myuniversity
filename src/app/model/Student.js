"use strict";
var University_1 = require("./University");
var Formation_1 = require("./Formation");
var ModuleFormation_1 = require("./ModuleFormation");
var Domaine_1 = require("./Domaine");
var DB_1 = require("./DB");
var Student = (function () {
    function Student() {
        this.id = 0;
        this.nom = '';
        this.prenom = '';
        this.university = null;
        this.formation = null;
        this.modules = new Array();
        this.interets = new Array();
    }
    Student.fromJSON = function (json) {
        var s = new Student();
        s.id = json['id'];
        s.nom = json['nom'];
        s.prenom = json['prenom'];
        s.university = DB_1.DB.findUniversityById(json['universityId']);
        if (s.university == null) {
            s.university = new University_1.University();
            s.university.id = json['universityId'];
        }
        s.formation = DB_1.DB.findFormationById(json['formationId']);
        if (s.formation == null) {
            s.formation = new Formation_1.Formation();
            s.formation.id = json['formationId'];
        }
        s.modules = json['modules'].map(function (m) {
            return ModuleFormation_1.ModuleFormation.fromJSON(m);
        });
        s.interets = json['interets'].map(function (i) {
            var d = DB_1.DB.findDomaineById(i);
            if (d == null) {
                d = new Domaine_1.Domaine();
                d.id = i;
            }
            return d;
        });
        return s;
    };
    Student.prototype.toJSON = function () {
        return {
            id: this.id,
            nom: this.nom,
            prenom: this.prenom,
            universityId: this.university.id,
            formationId: this.formation.id,
            modules: this.modules,
            interets: this.interets.map(function (d) { return d.id; })
        };
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=Student.js.map