"use strict";
var Batiment_1 = require("./Batiment");
var Formation_1 = require("./Formation");
var Employee_1 = require("./Employee");
var University = (function () {
    function University() {
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
        for (var i = 0; i < json['batiments'].length; i++) {
            var b = Batiment_1.Batiment.fromJSON(json['batiments'][i]);
            u.batiments.push(b);
        }
        u.formations = new Array();
        for (var i = 0; i < json['formations'].length; i++) {
            var f = Formation_1.Formation.fromJSON(json['formations'][i]);
            u.formations.push(f);
        }
        u.employees = new Array();
        for (var i = 0; i < json['employees'].length; i++) {
            var e = Employee_1.Employee.fromJSON(json['employees'][i]);
            u.employees.push(e);
        }
        return u;
    };
    University.prototype.usedSpace = function () {
        var n = 0;
        for (var i = 0; i < this.batiments.length; i++) {
            n += this.batiments[i].type.size;
        }
        return n;
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