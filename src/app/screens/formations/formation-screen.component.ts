import { Component, Input } from '@angular/core';
import { GameComponent } from '../../game/game.component';


@Component({
  selector: 'formation-screen',
  templateUrl: './formation-screen.component.html'
})
export class FormationScreenComponent {

  @Input() gameComponent: GameComponent;
}
