"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Game_1 = require("../model/Game");
var GameSave_1 = require("../model/GameSave");
var DB_1 = require("../model/DB");
var GameService = (function () {
    function GameService() {
        this.LSID_SAVES = 'universitySaves';
        this.LSID_CURRENT = 'universityGame';
    }
    GameService.prototype.getAllGameSaves = function () {
        if (!localStorage.getItem(this.LSID_SAVES)) {
            return new Array();
        }
        var saves = new Array();
        var json = JSON.parse(localStorage.getItem(this.LSID_SAVES));
        for (var i = 0; i < json.length; i++) {
            var gs = GameSave_1.GameSave.fromJSON(json[i]);
            saves.push(gs);
        }
        return saves;
    };
    GameService.prototype.getCurrentGame = function () {
        if (!sessionStorage.getItem(this.LSID_CURRENT)) {
            return null;
        }
        var g = Game_1.Game.fromJSON(JSON.parse(sessionStorage.getItem(this.LSID_CURRENT)));
        return g;
    };
    GameService.prototype.setCurrentGame = function (game) {
        sessionStorage.setItem(this.LSID_CURRENT, JSON.stringify(game));
    };
    GameService.prototype.save = function (game) {
        var allSaves = this.getAllGameSaves();
        if (!allSaves) {
            allSaves = new Array();
        }
        var gs = new GameSave_1.GameSave(game);
        gs.datas = DB_1.DB.saveToJSON();
        allSaves.push(gs);
        localStorage.setItem(this.LSID_SAVES, JSON.stringify(allSaves));
    };
    GameService.prototype.load = function (index) {
        var allSaves = this.getAllGameSaves();
        if (index >= allSaves.length) {
            return false;
        }
        else {
            var gs = allSaves[index];
            DB_1.DB.loadFromJSON(gs.datas);
            return gs.game;
        }
    };
    GameService.prototype.deleteGame = function (gameSave) {
        var allSaves = this.getAllGameSaves();
        var index = -1;
        for (var i = 0; i < allSaves.length; i++) {
            if (allSaves[i].id === gameSave.id) {
                index = i;
            }
        }
        if (index >= 0) {
            allSaves.splice(index, 1);
        }
        localStorage.setItem(this.LSID_SAVES, JSON.stringify(allSaves));
    };
    GameService.prototype.countGameSaves = function () {
        return this.getAllGameSaves().length;
    };
    return GameService;
}());
GameService = __decorate([
    core_1.Injectable()
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map