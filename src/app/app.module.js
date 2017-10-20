"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var main_menu_component_1 = require("./main-menu/main-menu.component");
var newgame_component_1 = require("./newgame/newgame.component");
var game_component_1 = require("./game/game.component");
var loadgame_component_1 = require("./load/loadgame.component");
var status_bar_component_1 = require("./status-bar/status-bar.component");
var in_game_menu_component_1 = require("./in-game-menu/in-game-menu.component");
var building_screen_component_1 = require("./screens/buildings/building-screen.component");
var formation_screen_component_1 = require("./screens/formations/formation-screen.component");
var rh_screen_component_1 = require("./screens/rh/rh-screen.component");
var student_screen_component_1 = require("./screens/students/student-screen.component");
var batiment_details_component_1 = require("./batiment/batiment-details.component");
var person_selection_component_1 = require("./person-selector/person-selection.component");
var game_time_component_1 = require("./game-time/game-time.component");
var ui_person_component_1 = require("./ui/ui-person/ui-person.component");
var world_screen_component_1 = require("./screens/world/world-screen.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, main_menu_component_1.MainMenuComponent, newgame_component_1.NewGameComponent, game_component_1.GameComponent, loadgame_component_1.LoadGameComponent,
            status_bar_component_1.StatusBarComponent, in_game_menu_component_1.InGameMenuComponent,
            building_screen_component_1.BuildingScreenComponent, formation_screen_component_1.FormationScreenComponent, rh_screen_component_1.RHScreenComponent, student_screen_component_1.StudentScreenComponent, world_screen_component_1.WorldScreenComponent,
            batiment_details_component_1.BatimentDetailsComponent, person_selection_component_1.PersonSelectionComponent, game_time_component_1.GameTimeComponent,
            ui_person_component_1.UIPersonComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map