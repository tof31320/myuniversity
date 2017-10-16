"use strict";
var Random = (function () {
    function Random() {
    }
    Random.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max + 1)) + min;
    };
    Random.randomString = function (strings) {
        var n = Random.randomNumber(0, strings.length - 1);
        return strings[Random.randomNumber(0, strings.length - 1)];
    };
    Random.randomLastname = function () {
        return Random.randomString(Random.allLastnames);
    };
    Random.randomFirstname = function (genre) {
        if (genre === 'M') {
            return Random.randomString(Random.allFirstnamesMale);
        }
        else {
            return Random.randomString(Random.allFirstnamesFemale);
        }
    };
    Random.randomAvatar = function (genre) {
        if (genre === 'M') {
            return Random.randomString(Random.allAvatarsMale);
        }
        else {
            return Random.randomString(Random.allAvatarsFemale);
        }
    };
    return Random;
}());
Random.allFirstnamesMale = new Array();
Random.allFirstnamesFemale = new Array();
Random.allLastnames = new Array();
Random.allAvatarsMale = new Array();
Random.allAvatarsFemale = new Array();
exports.Random = Random;
//# sourceMappingURL=Random.js.map