"use strict";
var Batiment_1 = require("./Batiment");
var Formation_1 = require("./Formation");
var Employee_1 = require("./Employee");
var DB_1 = require("./DB");
var University = (function () {
    function University() {
        this.id = 0;
        this.name = '';
        this.areaSize = 20;
        this.batiments = new Array();
        this.formations = new Array();
        this.employees = new Array();
    }
    University.fromJSON = function (json) {
        var u = new University();
        u.name = json['name'];
        u.areaSize = json['areaSize'];
        u.batiments = json['batiments'].map(function (bid) {
            var bat = DB_1.DB.findBatimentById(bid);
            if (bat == null) {
                bat = new Batiment_1.Batiment();
                bat.id = bid;
                return bat;
            }
            else {
                return bat;
            }
        });
        u.formations = json['formations'].map(function (fid) {
            var f = DB_1.DB.findFormationById(fid);
            if (f == null) {
                f = new Formation_1.Formation();
                f.id = fid;
                return f;
            }
            else {
                return f;
            }
        });
        u.employees = json['employees'].map(function (eid) {
            var e = DB_1.DB.findEmployeeById(eid);
            if (e == null) {
                e = new Employee_1.Employee();
                e.id = eid;
                return e;
            }
            else {
                return e;
            }
        });
        return u;
    };
    University.prototype.usedSpace = function () {
        var n = 0;
        for (var i = 0; i < this.batiments.length; i++) {
            n += this.batiments[i].type.size;
        }
        return n;
    };
    University.prototype.toJSON = function () {
        return {
            id: this.id,
            name: this.name,
            areaSize: this.areaSize,
            batiments: this.batiments.map(function (b) { return b.id; }),
            formations: this.formations.map(function (f) { return f.id; }),
            employees: this.employees.map(function (e) { return e.id; })
        };
    };
    University.prototype.findBatimentById = function (id) {
        for (var i = 0; i < this.batiments.length; i++) {
            if (this.batiments[i].id === id) {
                return this.batiments[i];
            }
        }
        return null;
    };
    return University;
}());
exports.University = University;
//# sourceMappingURL=University.js.map