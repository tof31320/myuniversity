import { Component, Input } from '@angular/core';
import { Game } from '../model/Game';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: [ 'css/buttons.css', './status-bar.component.css' ]
})
export class StatusBarComponent {

  @Input() gameComponent: GameComponent;

  @Input() game: Game;

  showOptionsMenu(){
    this.gameComponent.menuInGameVisible = true;
  }
}
