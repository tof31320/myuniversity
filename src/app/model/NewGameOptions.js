"use strict";
var NewGameOptions = (function () {
    function NewGameOptions() {
        this.nbOtherUniversities = 1;
    }
    NewGameOptions.fromJSON = function (json) {
        var opt = new NewGameOptions();
        Object.assign(opt, json);
        return opt;
    };
    NewGameOptions.prototype.toJSON = function () {
        var json = {
            nbOtherUniversities: this.nbOtherUniversities
        };
        return json;
    };
    return NewGameOptions;
}());
exports.NewGameOptions = NewGameOptions;
//# sourceMappingURL=NewGameOptions.js.map