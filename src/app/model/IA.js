"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Random_1 = require("../model/Random");
var Employee_1 = require("./Employee");
var IAService = (function () {
    function IAService(http) {
        this.http = http;
    }
    IAService.prototype.createPerson = function (params) {
        var person;
        if (params && params['personType'] && params['personType'] === 'employee') {
            person = new Employee_1.Employee();
            person['id'] = Date.now();
            person['nom'] = Random_1.Random.randomLastname();
            person['genre'] = Random_1.Random.randomNumber(0, 1) === 1 ? 'M' : 'F';
            person['prenom'] = Random_1.Random.randomFirstname(person['genre']);
            person['avatar'] = Random_1.Random.randomAvatar(person['genre']);
        }
        else {
            person = null;
        }
        return person;
    };
    IAService.prototype.createPersons = function (nb, params) {
        var ret = new Array();
        for (var i = 0; i < nb; i++) {
            var p = this.createPerson(params);
            console.log(p);
            ret.push(p);
        }
        return ret;
    };
    return IAService;
}());
IAService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], IAService);
exports.IAService = IAService;
//# sourceMappingURL=IA.js.map