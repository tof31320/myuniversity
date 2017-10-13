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
var game_component_1 = require("../../game/game.component");
var ServiceModel_service_1 = require("../../model/ServiceModel.service");
var Formation_1 = require("../../model/Formation");
var FormationScreenComponent = (function () {
    function FormationScreenComponent(serviceModel) {
        this.serviceModel = serviceModel;
        this.domaines = new Array();
        this.modules = new Array();
        this.formationSelected = null;
    }
    FormationScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceModel.getAllDomaines().subscribe(function (domaines) { return _this.domaines = domaines; });
        this.serviceModel.getAllModulesFormation().subscribe(function (modules) { return _this.modules = modules; });
        this.formationSelected = new Formation_1.Formation();
    };
    FormationScreenComponent.prototype.selectDomaine = function (domaine) {
        this.formationSelected.domaine = domaine;
    };
    FormationScreenComponent.prototype.toggleModule = function (m) {
        if (this.formationSelected.containsModule(m)) {
            this.formationSelected.removeModule(m);
        }
        else {
            this.formationSelected.addModule(m);
        }
    };
    return FormationScreenComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", game_component_1.GameComponent)
], FormationScreenComponent.prototype, "gameComponent", void 0);
FormationScreenComponent = __decorate([
    core_1.Component({
        selector: 'formation-screen',
        providers: [ServiceModel_service_1.ServiceModel],
        templateUrl: './formation-screen.component.html',
        styleUrls: ['./formation-screen.component.css']
    }),
    __metadata("design:paramtypes", [ServiceModel_service_1.ServiceModel])
], FormationScreenComponent);
exports.FormationScreenComponent = FormationScreenComponent;
//# sourceMappingURL=formation-screen.component.js.map