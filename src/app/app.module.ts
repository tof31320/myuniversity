import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NewGameComponent } from './newgame/newgame.component';
import { GameComponent } from './game/game.component';
import { LoadGameComponent } from './load/loadgame.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MainMenuComponent, NewGameComponent, GameComponent, LoadGameComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
