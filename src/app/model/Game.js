"use strict";
var Player_1 = require("../model/Player");
var University_1 = require("../model/University");
var Batiment_1 = require("../model/Batiment");
var GamePhase;
(function (GamePhase) {
    GamePhase[GamePhase["PRE_RENTREE"] = 0] = "PRE_RENTREE";
    GamePhase[GamePhase["EN_COURS"] = 1] = "EN_COURS";
})(GamePhase || (GamePhase = {}));
;
var Game = (function () {
    function Game() {
        this.player = null;
        this.university = null;
        this.phase = GamePhase.PRE_RENTREE;
        this.player = new Player_1.Player();
        this.university = new University_1.University();
    }
    Game.fromJSON = function (json) {
        var g = new Game();
        g.player = Player_1.Player.fromJSON(json['player']);
        g.university = University_1.University.fromJSON(json['university']);
        return g;
    };
    Game.prototype.canBuild = function (type) {
        return this.player.money >= type.price
            && this.university.usedSpace() + type.size <= this.university.areaSize;
    };
    Game.prototype.build = function (type) {
        var bat = new Batiment_1.Batiment();
        bat.id = Date.now();
        bat.nom = type.nom;
        bat.type = type;
        this.university.batiments.push(bat);
        this.player.money -= bat.type.price;
        console.log(this.university);
    };
    Game.prototype.saveFormation = function (formation) {
        if (formation.id === 0) {
            // new
            formation.id = Date.now();
            this.university.formations.push(formation);
        }
        else {
            var index = this.university.formations.indexOf(formation);
            if (index >= 0) {
                this.university.formations[index] = formation;
            }
        }
        return true;
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map