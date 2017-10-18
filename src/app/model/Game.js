"use strict";
var Player_1 = require("../model/Player");
var University_1 = require("../model/University");
var Batiment_1 = require("../model/Batiment");
var Util_1 = require("../model/Util");
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
            var index = Util_1.Util.indexOf(formation, this.university.formations);
            if (index >= 0) {
                this.university.formations[index] = formation;
            }
        }
        return true;
    };
    Game.prototype.recrut = function (emp) {
        this.university.employees.push(emp);
    };
    Game.prototype.fire = function (emp) {
        var index = Util_1.Util.indexOf(emp, this.university.employees);
        if (index >= 0) {
            this.university.employees.splice(index, 1);
        }
    };
    Game.prototype.closeFormation = function (form) {
        var index = Util_1.Util.indexOf(form, this.university.formations);
        if (index >= 0) {
            this.university.formations.splice(index, 1);
        }
    };
    Game.prototype.tick = function () {
        console.log("TICK!");
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map