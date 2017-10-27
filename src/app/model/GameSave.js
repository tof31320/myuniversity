"use strict";
var Game_1 = require("./Game");
var DB_1 = require("./DB");
var GameSave = (function () {
    function GameSave(game) {
        this.id = 0;
        this.title = 'Another Game Save !';
        this.id = Date.now();
        this.game = game;
        this.date = new Date();
    }
    GameSave.fromJSON = function (json) {
        var gs = new GameSave(Game_1.Game.fromJSON(json['game']));
        gs.id = json['id'];
        gs.title = json['title'];
        gs.date = json['date'];
        gs.datas = json['datas'];
        return gs;
    };
    GameSave.prototype.toJSON = function () {
        var json = {
            id: this.id,
            title: this.title,
            date: this.date,
            game: this.game.toJSON(),
            datas: DB_1.DB.saveToJSON()
        };
        return json;
    };
    return GameSave;
}());
exports.GameSave = GameSave;
//# sourceMappingURL=GameSave.js.map