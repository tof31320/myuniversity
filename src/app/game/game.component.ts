import { Component, Input } from '@angular/core';
import { Game } from '../model/Game';

@Component({
  selector: 'game',
  templateUrl: './game.component.html'
})
export class GameComponent {

  @Input() game: Game;

  showMainMenu(){

  }

  quit(){

  }
}
