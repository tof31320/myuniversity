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
var Game_1 = require("../model/Game");
var game_service_1 = require("../game/game.service");
var app_component_1 = require("../app.component");
var GameComponent = (function () {
    function GameComponent(gameService) {
        this.gameService = gameService;
        this.menuInGameVisible = false;
        this.currentScreen = 'dashboard';
    }
    GameComponent.prototype.showMainMenu = function () {
        this.menuInGameVisible = true;
    };
    GameComponent.prototype.saveGame = function () {
        this.gameService.save(this.game);
    };
    GameComponent.prototype.showScreen = function (screen) {
        this.currentScreen = screen;
    };
    GameComponent.prototype.quit = function () {
        this.app.showMenu();
    };
    return GameComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", app_component_1.AppComponent)
], GameComponent.prototype, "app", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Game_1.Game)
], GameComponent.prototype, "game", void 0);
GameComponent = __decorate([
    core_1.Component({
        selector: 'game',
        templateUrl: './game.component.html'
    }),
    __metadata("design:paramtypes", [game_service_1.GameService])
], GameComponent);
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map