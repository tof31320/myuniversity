import { Component, Input } from '@angular/core';
import { GameComponent } from '../../game/game.component';


@Component({
  selector: 'rh-screen',
  templateUrl: './rh-screen.component.html'
})
export class RHScreenComponent {

  @Input() gameComponent: GameComponent;
}
