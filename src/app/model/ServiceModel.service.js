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
    return ServiceModel;
}());
ServiceModel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ServiceModel);
exports.ServiceModel = ServiceModel;
//# sourceMappingURL=ServiceModel.service.js.map