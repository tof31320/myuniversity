import { Component, Input } from '@angular/core';

import { GameComponent } from '../../game/game.component';

@Component({
    selector: 'world-screen',
    templateUrl: './world-screen.component.html',
    styleUrls: [ './world-screen.component.css' ]
})
export class WorldScreenComponent {

    @Input() gameComponent: GameComponent;
}