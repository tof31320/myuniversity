import { Component, Input } from '@angular/core';
import { Game } from '../model/Game';
import { GameService } from '../game/game.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'game',
  templateUrl: './game.component.html'
})
export class GameComponent {

  @Input() app: AppComponent;
  @Input() game: Game;

  constructor(private gameService: GameService){
  }

  showMainMenu(){
  }

  saveGame(){
    this.gameService.save(this.game);
  }

  quit(){
    this.app.showMenu();
  }
}
