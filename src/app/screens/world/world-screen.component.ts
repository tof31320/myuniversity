import { Component, Input, OnInit } from '@angular/core';
import { World } from '../../model/World';

import { GameComponent } from '../../game/game.component';

@Component({
    selector: 'world-screen',
    templateUrl: './world-screen.component.html',
    styleUrls: [ './world-screen.component.css' ]
})
export class WorldScreenComponent implements OnInit {

    @Input() gameComponent: GameComponent;

    world: World;

    ngOnInit(){
        this.world = this.gameComponent.game.world;
    }
}