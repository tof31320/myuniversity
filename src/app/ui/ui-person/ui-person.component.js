"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Employee_1 = require("../../model/Employee");
var UIPersonComponent = (function () {
    function UIPersonComponent() {
        this.detailsPanelVisible = false;
    }
    UIPersonComponent.prototype.showDetails = function (visible) {
        this.detailsPanelVisible = visible;
    };
    return UIPersonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Employee_1.Employee)
], UIPersonComponent.prototype, "person", void 0);
UIPersonComponent = __decorate([
    core_1.Component({
        selector: 'ui-person',
        templateUrl: './ui-person.component.html',
        styleUrls: ['./ui-person.component.css']
    })
], UIPersonComponent);
exports.UIPersonComponent = UIPersonComponent;
//# sourceMappingURL=ui-person.component.js.map