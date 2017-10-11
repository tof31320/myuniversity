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
var FormationScreenComponent = (function () {
    function FormationScreenComponent() {
    }
    return FormationScreenComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", game_component_1.GameComponent)
], FormationScreenComponent.prototype, "gameComponent", void 0);
FormationScreenComponent = __decorate([
    core_1.Component({
        selector: 'formation-screen',
        templateUrl: './formation-screen.component.html'
    })
], FormationScreenComponent);
exports.FormationScreenComponent = FormationScreenComponent;
//# sourceMappingURL=formation-screen.component.js.map