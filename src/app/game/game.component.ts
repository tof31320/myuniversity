import { Component, Input } from '@angular/core';
import { Game } from '../model/Game';
import { GameService } from '../game/game.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: [ './game.component.css' ]
})
export class GameComponent {

  @Input() app: AppComponent;
  @Input() game: Game;

  menuInGameVisible: boolean = false;

  currentScreen: string = 'dashboard';

  constructor(private gameService: GameService){
  }

  showMainMenu(){
    this.menuInGameVisible = true;
  }

  saveGame(){
    this.gameService.save(this.game);
  }

  showScreen(screen: string){
    this.currentScreen = screen;
  }

  quit(){
    this.app.showMenu();
  }

  sync(){
    this.gameService.setCurrentGame(this.game);
  }
}
