"use strict";
var GameSave = (function () {
    function GameSave(game) {
        this.id = 0;
        this.title = 'Another Game Save !';
        this.id = Date.now();
        this.game = game;
        this.date = new Date();
    }
    return GameSave;
}());
exports.GameSave = GameSave;
//# sourceMappingURL=GameSave.js.map