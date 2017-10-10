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
var app_component_1 = require("../app.component");
var Game_1 = require("../model/Game");
var NewGameComponent = (function () {
    function NewGameComponent() {
        this.newGame = null;
    }
    NewGameComponent.prototype.ngOnInit = function () {
        this.newGame = new Game_1.Game();
    };
    NewGameComponent.prototype.startGame = function () {
        this.app.currentGame = this.newGame;
        this.app.showGame();
    };
    return NewGameComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", app_component_1.AppComponent)
], NewGameComponent.prototype, "app", void 0);
NewGameComponent = __decorate([
    core_1.Component({
        selector: 'newgame',
        templateUrl: './newgame.component.html',
        styleUrls: ['./newgame.component.css']
    })
], NewGameComponent);
exports.NewGameComponent = NewGameComponent;
//# sourceMappingURL=newgame.component.js.map