import { Component, Input } from '@angular/core';
import { GameComponent } from '../../game/game.component';


@Component({
  selector: 'student-screen',
  templateUrl: './student-screen.component.html'
})
export class StudentScreenComponent {

  @Input() gameComponent: GameComponent;
}
