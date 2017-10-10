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
var game_service_1 = require("./game/game.service");
var AppComponent = (function () {
    function AppComponent(gameService) {
        this.gameService = gameService;
        this.gameState = 'menu';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.currentGame = this.gameService.getCurrentGame();
        /*if(this.currentGame != null){
          this.gameState = 'game';
        }*/
    };
    AppComponent.prototype.startNewGame = function (newGame) {
        this.currentGame = newGame;
        this.gameState = 'game';
        this.gameService.save(newGame);
        this.gameService.setCurrentGame(newGame);
    };
    AppComponent.prototype.continueGame = function () {
        this.gameState = 'game';
    };
    AppComponent.prototype.showGame = function () {
        this.gameState = 'game';
    };
    AppComponent.prototype.showMenu = function () {
        this.gameState = 'menu';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [game_service_1.GameService],
        template: "<main-menu *ngIf=\"gameState === 'menu'\" [app]=\"this\"></main-menu>\n    <game *ngIf=\"gameState==='game'\" [game]=\"currentGame\"></game>\n  ",
    }),
    __metadata("design:paramtypes", [game_service_1.GameService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map