"use strict";
var Game_1 = require("./Game");
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
        return gs;
    };
    return GameSave;
}());
exports.GameSave = GameSave;
//# sourceMappingURL=GameSave.js.map