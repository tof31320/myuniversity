import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Game } from '../model/Game';
import { GameSave } from '../model/GameSave';
import { GameService } from '../game/game.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: [ './main-menu.component.css' ]
})
export class MainMenuComponent {
  screen: string = 'none';

  @Input() app: AppComponent;

  constructor(private gameService: GameService){}

  showScreen(screen: string){
    this.screen = screen;
  }

  newGame(newGame: Game){
    this.app.currentGame = newGame;

    this.gameService.setCurrentGame(newGame);
  }

  hasCurrentGame(){
    return this.app.currentGame != null;
  }

  hasNoSaves(){
    return this.gameService.getAllGameSaves().length === 0;
  }

  continueCurrentGame(){
    this.app.showGame();
  }
}
