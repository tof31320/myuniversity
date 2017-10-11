import { Component, Input } from '@angular/core';
import { GameComponent} from '../../game/game.component';

@Component({
  selector: 'building-screen',
  templateUrl: './building-screen.component.html'
})
export class BuildingScreenComponent {

  @Input() gameComponent: GameComponent;
}
