"use strict";
var Batiment_1 = require("./Batiment");
var University = (function () {
    function University() {
        this.name = '';
        this.areaSize = 20;
        this.batiments = new Array();
    }
    University.fromJSON = function (json) {
        var u = new University();
        u.name = json['name'];
        u.areaSize = json['areaSize'];
        for (var i = 0; i < json['batiments'].length; i++) {
            var b = Batiment_1.Batiment.fromJSON(json['batiments'][i]);
            u.batiments.push(b);
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
    return University;
}());
exports.University = University;
//# sourceMappingURL=University.js.map