import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MainMenuComponent, NewGameComponent, GameComponent, LoadGameComponent,
                  StatusBarComponent, InGameMenuComponent,
                  BuildingScreenComponent,FormationScreenComponent,RHScreenComponent,StudentScreenComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
