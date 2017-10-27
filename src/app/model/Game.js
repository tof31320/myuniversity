"use strict";
var Player_1 = require("../model/Player");
var University_1 = require("../model/University");
var Batiment_1 = require("../model/Batiment");
var NewGameOptions_1 = require("./NewGameOptions");
var World_1 = require("./World");
var Util_1 = require("../model/Util");
var DB_1 = require("../model/DB");
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
        this.world = new World_1.World();
        this.player = new Player_1.Player();
        this.university = DB_1.DB.newUniversity();
        this.world = new World_1.World();
        this.options = new NewGameOptions_1.NewGameOptions();
    }
    Game.fromJSON = function (json) {
        var g = new Game();
        /*g.player = Player.fromJSON(json['player']);
        g.university = University.fromJSON(json['university']);
        g.options = NewGameOptions.fromJSON(json['options']);
        g.world = World.fromJSON(json['world']);
    */
        g.phase = json['phase'];
        g.player = Player_1.Player.fromJSON(json['player']);
        g.university = DB_1.DB.findUniversityById(json['universityId']);
        if (g.university == null) {
            g.university = new University_1.University();
            g.university.id = json['universityId'];
        }
        g.options = NewGameOptions_1.NewGameOptions.fromJSON(json['options']);
        g.world = World_1.World.fromJSON(json['world']);
        return g;
    };
    Game.prototype.toJSON = function () {
        var json = {
            phase: this.phase,
            player: this.player.toJSON(),
            universityId: this.university.id,
            options: this.options.toJSON(),
            world: this.world.toJSON()
        };
        return json;
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