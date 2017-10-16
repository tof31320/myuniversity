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
require("rxjs/add/operator/map");
var TypeBatiment_1 = require("./TypeBatiment");
var Domaine_1 = require("./Domaine");
var ModuleFormation_1 = require("./ModuleFormation");
var ServiceModel = (function () {
    function ServiceModel(http) {
        this.http = http;
    }
    ServiceModel.prototype.getAllTypesBatiment = function () {
        return this.http.get('data/types-batiment.json')
            .map(function (response) {
            var types = new Array();
            var json = response.json();
            for (var i = 0; i < json.length; i++) {
                types.push(TypeBatiment_1.TypeBatiment.parseFromJSON(json[i]));
            }
            console.log(types);
            return types;
        });
    };
    ServiceModel.prototype.getAllDomaines = function () {
        return this.http.get('data/domaines-modules.json')
            .map(function (resp) {
            var domaines = new Array();
            var json = resp.json().domaines;
            for (var i = 0; i < json.length; i++) {
                domaines.push(Domaine_1.Domaine.fromJSON(json[i]));
            }
            return domaines;
        });
    };
    ServiceModel.prototype.getAllModulesFormation = function () {
        return this.http.get('data/domaines-modules.json')
            .map(function (resp) {
            var modules = new Array();
            var json = resp.json().modules;
            for (var i = 0; i < json.length; i++) {
                modules.push(ModuleFormation_1.ModuleFormation.fromJSON(json[i]));
            }
            return modules;
        });
    };
    ServiceModel.prototype.getAllLastnames = function () {
        return this.http.get('data/names.json')
            .map(function (resp) { return resp.json().lastnames; });
    };
    ServiceModel.prototype.getAllFirstnames = function (genre) {
        return this.http.get('data/names.json')
            .map(function (resp) {
            if (genre === 'M') {
                return resp.json().firstnames.males;
            }
            else {
                return resp.json().firstnames.females;
            }
        });
    };
    ServiceModel.prototype.getAllAvatars = function (genre) {
        return this.http.get('data/names.json')
            .map(function (resp) {
            if (genre === 'M') {
                return resp.json().avatars.males;
            }
            else {
                return resp.json().avatars.females;
            }
        });
    };
    return ServiceModel;
}());
ServiceModel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ServiceModel);
exports.ServiceModel = ServiceModel;
//# sourceMappingURL=ServiceModel.service.js.map