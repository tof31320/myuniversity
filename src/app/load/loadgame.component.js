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
var game_service_1 = require("../game/game.service");
var LoadGameComponent = (function () {
    function LoadGameComponent(gameService) {
        this.gameService = gameService;
        this.onGameSelection = new core_1.EventEmitter();
        this.onGameDeletion = new core_1.EventEmitter();
    }
    LoadGameComponent.prototype.ngOnInit = function () {
        this.gamesaves = this.gameService.getAllGameSaves();
    };
    LoadGameComponent.prototype.loadGame = function (gameSave) {
        this.onGameSelection.emit(gameSave);
    };
    LoadGameComponent.prototype.deleteGame = function (gameSave) {
        this.onGameDeletion.emit(gameSave);
        this.gameService.deleteGame(gameSave);
        this.gamesaves = this.gameService.getAllGameSaves();
    };
    return LoadGameComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", app_component_1.AppComponent)
], LoadGameComponent.prototype, "app", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoadGameComponent.prototype, "onGameSelection", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoadGameComponent.prototype, "onGameDeletion", void 0);
LoadGameComponent = __decorate([
    core_1.Component({
        selector: 'load-game',
        templateUrl: './loadgame.component.html',
        providers: [game_service_1.GameService],
        styleUrls: ['./loadgame.component.css']
    }),
    __metadata("design:paramtypes", [game_service_1.GameService])
], LoadGameComponent);
exports.LoadGameComponent = LoadGameComponent;
//# sourceMappingURL=loadgame.component.js.map