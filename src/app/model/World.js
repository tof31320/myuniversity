"use strict";
var DB_1 = require("./DB");
var World = (function () {
    function World() {
        this.universities = new Array();
        this.poolStudents = new Array();
    }
    World.fromJSON = function (json) {
        var w = new World();
        w.universities = new Array();
        for (var i = 0; i < json['universities'].length; i++) {
            //let u: University = University.fromJSON(json['universities'][i]);
            var u = DB_1.DB.findUniversityById(json['universities'][i]);
            w.universities.push(u);
        }
        w.poolStudents = new Array();
        return w;
    };
    World.prototype.toJSON = function () {
        var uIds = this.universities.map(function (u) {
            return u.id;
        });
        var sIds = this.poolStudents.map(function (s) {
            return s.id;
        });
        var json = {
            universities: uIds,
            poolStudents: sIds
        };
        return json;
    };
    return World;
}());
exports.World = World;
//# sourceMappingURL=World.js.map