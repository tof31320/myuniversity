"use strict";
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
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=Student.js.map