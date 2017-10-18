"use strict";
var Util = (function () {
    function Util() {
    }
    Util.indexOf = function (item, list) {
        for (var i = 0; i < list.length; i++) {
            if (item.id && item['id'] === list[i]['id']) {
                return i;
            }
        }
        return -1;
    };
    return Util;
}());
exports.Util = Util;
//# sourceMappingURL=Util.js.map