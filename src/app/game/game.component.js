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
var ServiceModel_service_1 = require("../model/ServiceModel.service");
var app_component_1 = require("../app.component");
var DB_1 = require("../model/DB");
var GameComponent = (function () {
    function GameComponent(gameService, serviceModel) {
        this.gameService = gameService;
        this.serviceModel = serviceModel;
        this.menuInGameVisible = false;
        this.currentScreen = 'dashboard';
    }
    GameComponent.prototype.ngOnInit = function () {
        this.serviceModel.getAllLastnames().subscribe(function (names) { return DB_1.DB.lastnames = names; });
        this.serviceModel.getAllFirstnames('M').subscribe(function (names) { return DB_1.DB.firstnames['males'] = names; });
        this.serviceModel.getAllFirstnames('F').subscribe(function (names) { return DB_1.DB.firstnames['females'] = names; });
        this.serviceModel.getAllAvatars('M').subscribe(function (avatars) { return DB_1.DB.avatars['males'] = avatars; });
        this.serviceModel.getAllAvatars('F').subscribe(function (avatars) { return DB_1.DB.avatars['females'] = avatars; });
    };
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
    GameComponent.prototype.sync = function () {
        this.gameService.setCurrentGame(this.game);
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
        templateUrl: './game.component.html',
        styleUrls: ['./game.component.css'],
        providers: [ServiceModel_service_1.ServiceModel, game_service_1.GameService]
    }),
    __metadata("design:paramtypes", [game_service_1.GameService, ServiceModel_service_1.ServiceModel])
], GameComponent);
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map