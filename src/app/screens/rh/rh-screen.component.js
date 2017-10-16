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
var game_component_1 = require("../../game/game.component");
var IA_1 = require("../../model/IA");
var RHScreenComponent = (function () {
    function RHScreenComponent(ia) {
        this.ia = ia;
        this.otherEmployees = new Array();
        this.showRecrutement = false;
    }
    RHScreenComponent.prototype.ngOnInit = function () {
        this.employees = this.gameComponent.game.university.employees;
        this.otherEmployees = this.ia.createPersons(15, { personType: 'employee' });
        console.log(this.otherEmployees);
    };
    RHScreenComponent.prototype.openRecrutement = function () {
        this.showRecrutement = true;
    };
    RHScreenComponent.prototype.closeRecrutement = function () {
        this.showRecrutement = false;
    };
    return RHScreenComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", game_component_1.GameComponent)
], RHScreenComponent.prototype, "gameComponent", void 0);
RHScreenComponent = __decorate([
    core_1.Component({
        selector: 'rh-screen',
        templateUrl: './rh-screen.component.html',
        providers: [IA_1.IAService]
    }),
    __metadata("design:paramtypes", [IA_1.IAService])
], RHScreenComponent);
exports.RHScreenComponent = RHScreenComponent;
//# sourceMappingURL=rh-screen.component.js.map