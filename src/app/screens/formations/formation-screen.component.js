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
        this.personSelectionDialogOpen = false;
        this.moduleSelected = null;
    }
    FormationScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceModel.getAllDomaines().subscribe(function (domaines) { return _this.domaines = domaines; });
        this.serviceModel.getAllModulesFormation().subscribe(function (modules) { return _this.modules = modules; });
        this.formations = this.gameComponent.game.university.formations;
    };
    FormationScreenComponent.prototype.showFormationForm = function () {
        this.formationSelected = new Formation_1.Formation();
        console.log(this.formationSelected);
    };
    FormationScreenComponent.prototype.selectDomaine = function (domaine) {
        this.formationSelected.domaine = domaine;
    };
    FormationScreenComponent.prototype.toggleModule = function (m) {
        if (this.formationSelected.containsModule(m)) {
            this.formationSelected.removeModule(m);
        }
        else {
            this.formationSelected.addModule(m.clone());
        }
    };
    FormationScreenComponent.prototype.saveFormation = function () {
        if (this.gameComponent.game.saveFormation(this.formationSelected)) {
            this.formationSelected = null;
        }
        console.log(" formations", this.gameComponent.game.university.formations);
        this.gameComponent.sync();
    };
    FormationScreenComponent.prototype.isFormValid = function () {
        var ret = true;
        ret = ret && this.formationSelected.intitule != '';
        ret = ret && this.formationSelected.domaine != null;
        ret = ret && this.formationSelected.modules.length >= this.formationSelected.domaine.nbModulesMin;
        for (var i = 0; i < this.formationSelected.modules.length; i++) {
            ret = ret && this.formationSelected.modules[i].hVol >= 1;
            ret = ret && this.formationSelected.modules[i].teachers && this.formationSelected.modules[i].teachers.length > 0;
        }
        ret = ret && this.formationSelected.batiment != null;
        return ret;
    };
    FormationScreenComponent.prototype.cancelEdit = function () {
        this.formationSelected = null;
    };
    FormationScreenComponent.prototype.editFormation = function (formation) {
        this.formationSelected = formation.clone();
    };
    FormationScreenComponent.prototype.closeFormation = function (formation) {
        this.gameComponent.game.closeFormation(formation);
        this.gameComponent.sync();
    };
    FormationScreenComponent.prototype.onHVolumeChange = function (module) {
    };
    FormationScreenComponent.prototype.openProfessorsSelectionDialog = function (module) {
        this.moduleSelected = module;
        this.personSelectionDialogOpen = true;
    };
    FormationScreenComponent.prototype.selectPerson = function (emp) {
        if (this.moduleSelected != null) {
            this.moduleSelected.teachers.push(emp);
        }
        this.moduleSelected = null;
        this.personSelectionDialogOpen = false;
    };
    FormationScreenComponent.prototype.removeProfessorFromModule = function (module, emp) {
        module.removeTeacher(emp);
    };
    FormationScreenComponent.prototype.updateBatiment = function (event) {
        this.formationSelected.batiment = this.gameComponent.game.university.findBatimentById(Number(event));
        console.log(this.formationSelected);
    };
    FormationScreenComponent.prototype.compareWithBatimentId = function (b1, b2) {
        if (b1 == null || b2 == null) {
            return false;
        }
        return b1.id === b2.id;
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
        styleUrls: ['css/buttons.css', './formation-screen.component.css']
    }),
    __metadata("design:paramtypes", [ServiceModel_service_1.ServiceModel])
], FormationScreenComponent);
exports.FormationScreenComponent = FormationScreenComponent;
//# sourceMappingURL=formation-screen.component.js.map