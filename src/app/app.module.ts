import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NewGameComponent } from './newgame/newgame.component';
import { GameComponent } from './game/game.component';
import { LoadGameComponent } from './load/loadgame.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { InGameMenuComponent } from './in-game-menu/in-game-menu.component';
import { BuildingScreenComponent } from './screens/buildings/building-screen.component';
import { FormationScreenComponent } from './screens/formations/formation-screen.component';
import { RHScreenComponent } from './screens/rh/rh-screen.component';
import { StudentScreenComponent } from './screens/students/student-screen.component';
import { BatimentDetailsComponent } from './batiment/batiment-details.component';
import { PersonSelectionComponent } from './person-selector/person-selection.component';
import { GameTimeComponent } from './game-time/game-time.component';
import { UIPersonComponent } from './ui/ui-person/ui-person.component';
import { WorldScreenComponent } from './screens/world/world-screen.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, MainMenuComponent, NewGameComponent, GameComponent, LoadGameComponent,
                  StatusBarComponent, InGameMenuComponent,
                  BuildingScreenComponent,FormationScreenComponent,RHScreenComponent,StudentScreenComponent,WorldScreenComponent,
                  BatimentDetailsComponent, PersonSelectionComponent, GameTimeComponent,
                  UIPersonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
