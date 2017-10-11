import { Component, Input } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'in-game-menu',
  templateUrl: './in-game-menu.component.html',
  styleUrls: [ './in-game-menu.component.css', 'css/modal.css' ]
})
export class InGameMenuComponent {

  @Input() gameComponent: GameComponent;

  close(){
    this.gameComponent.menuInGameVisible = false;
  }

  continueGame(){
    this.close();
  }

  saveGame(){
    this.gameComponent.saveGame();
  }

  quit(){
    this.gameComponent.quit();
  }
}
