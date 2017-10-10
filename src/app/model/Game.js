"use strict";
var Player_1 = require("../model/Player");
var University_1 = require("../model/University");
var Game = (function () {
    function Game() {
        this.player = null;
        this.university = null;
        this.player = new Player_1.Player();
        this.university = new University_1.University();
    }
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map