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
var Batiment_1 = require("../model/Batiment");
var BatimentDetailsComponent = (function () {
    function BatimentDetailsComponent() {
    }
    return BatimentDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Batiment_1.Batiment)
], BatimentDetailsComponent.prototype, "batiment", void 0);
BatimentDetailsComponent = __decorate([
    core_1.Component({
        selector: 'batiment-details',
        templateUrl: './batiment-details.component.html',
        styleUrls: ['./batiment-details.component.css']
    })
], BatimentDetailsComponent);
exports.BatimentDetailsComponent = BatimentDetailsComponent;
//# sourceMappingURL=batiment-details.component.js.map