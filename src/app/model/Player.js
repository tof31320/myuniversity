"use strict";
var Player = (function () {
    function Player() {
        this.name = '';
        this.money = 0;
        this.money = 3000;
    }
    Player.fromJSON = function (json) {
        var p = new Player();
        Object.assign(p, json);
        return p;
    };
    Player.prototype.toJSON = function () {
        var json = {
            name: this.name,
            money: this.money
        };
        return json;
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map