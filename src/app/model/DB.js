"use strict";
var Batiment_1 = require("./Batiment");
var Employee_1 = require("./Employee");
var Formation_1 = require("./Formation");
var Student_1 = require("./Student");
var University_1 = require("./University");
var DB = (function () {
    function DB() {
    }
    DB.nextId = function () {
        this.currentId = this.currentId + 1;
        return this.currentId;
    };
    // Acces par ID
    DB.findUniversityById = function (uId) {
        for (var i = 0; i < DB.universities.length; i++) {
            if (DB.universities[i].id === uId) {
                return DB.universities[i];
            }
        }
        return null;
    };
    DB.findDomaineById = function (did) {
        var domaines = DB.domaines.filter(function (d) { return d.id === did; });
        return domaines.length > 0 ? domaines[0] : null;
    };
    DB.findFormationById = function (fid) {
        var formations = DB.formations.filter(function (f) {
            return f.id === fid;
        });
        return formations.length > 0 ? formations[0] : null;
    };
    DB.findTypeBatimentById = function (tid) {
        var types = DB.typesBatiment.filter(function (t) { return t.id === tid; });
        return types.length > 0 ? types[0] : null;
    };
    DB.findBatimentById = function (bid) {
        var batiments = DB.batiments.filter(function (b) { return b.id === bid; });
        return batiments.length > 0 ? batiments[0] : null;
    };
    DB.findEmployeeById = function (eid) {
        var employees = DB.employees.filter(function (e) { return e.id === eid; });
        return employees.length > 0 ? employees[0] : null;
    };
    DB.findProfessionById = function (pid) {
        var professions = DB.professions.filter(function (p) { return p.id === pid; });
        return professions.length > 0 ? professions[0] : null;
    };
    DB.newUniversity = function () {
        var u = new University_1.University();
        u.id = DB.nextId();
        this.universities.push(u);
        return u;
    };
    DB.saveToJSON = function () {
        return {
            batiments: DB.batiments.map(function (b) { return b.toJSON(); }),
            employees: DB.employees.map(function (e) { return e.toJSON(); }),
            formations: DB.formations.map(function (f) { return f.toJSON(); }),
            students: DB.students.map(function (s) { return s.toJSON(); }),
            universities: DB.universities.map(function (u) { return u.toJSON(); }),
            currentId: DB.currentId
        };
    };
    DB.loadFromJSON = function (json) {
        DB.batiments = json['batiments'].map(function (b) {
            return Batiment_1.Batiment.fromJSON(b);
        });
        DB.employees = json['employees'].map(function (e) {
            return Employee_1.Employee.fromJSON(e);
        });
        DB.formations = json['formations'].map(function (f) {
            return Formation_1.Formation.fromJSON(f);
        });
        DB.students = json['students'].map(function (s) {
            return Student_1.Student.fromJSON(s);
        });
        DB.universities = json['universities'].map(function (u) {
            return University_1.University.fromJSON(u);
        });
        DB.currentId = json['currentId'];
        // links
        DB.formations.forEach(function (f) {
            if (f.batiment) {
                f.batiment = DB.findBatimentById(f.batiment.id);
            }
        });
        DB.students.forEach(function (s) {
            if (s.university) {
                s.university = DB.findUniversityById(s.university.id);
            }
            if (s.formation) {
                s.formation = DB.findFormationById(s.formation.id);
            }
        });
        DB.universities.forEach(function (u) {
            u.formations = u.formations.map(function (f) { return DB.findFormationById(f.id); });
            u.employees = u.employees.map(function (e) { return DB.findEmployeeById(e.id); });
        });
    };
    return DB;
}());
// Données générales
DB.firstnames = {
    males: null,
    females: null
};
DB.lastnames = new Array();
DB.avatars = {
    males: null,
    females: null
};
DB.domaines = new Array();
DB.modules = new Array();
DB.typesBatiment = new Array();
DB.professions = new Array();
// Données propres au jeu
DB.batiments = new Array();
DB.employees = new Array();
DB.formations = new Array();
DB.students = new Array();
DB.universities = new Array();
DB.currentId = 0;
exports.DB = DB;
//# sourceMappingURL=DB.js.map