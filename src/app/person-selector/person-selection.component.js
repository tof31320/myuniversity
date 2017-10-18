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
var PersonSelectionComponent = (function () {
    function PersonSelectionComponent(el) {
        this.el = el;
        this.employees = new Array();
        this.modal = false;
        this.onSelection = new core_1.EventEmitter();
    }
    PersonSelectionComponent.prototype.ngOnInit = function () {
    };
    PersonSelectionComponent.prototype.selectPerson = function (employe) {
        this.onSelection.emit(employe);
    };
    return PersonSelectionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PersonSelectionComponent.prototype, "employees", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PersonSelectionComponent.prototype, "modal", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PersonSelectionComponent.prototype, "onSelection", void 0);
PersonSelectionComponent = __decorate([
    core_1.Component({
        selector: 'person-selection',
        templateUrl: './person-selection.component.html',
        styleUrls: ['css/dialogs.css', './person-selection.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], PersonSelectionComponent);
exports.PersonSelectionComponent = PersonSelectionComponent;
//# sourceMappingURL=person-selection.component.js.map