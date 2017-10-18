import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GameComponent } from '../game/game.component';

@Component({
  selector: 'game-time',
  templateUrl: './game-time.component.html',
  styleUrls: [ 'css/buttons.css', './game-time.component.css' ]
})
export class GameTimeComponent implements OnInit {

    @Input() gameComponent: GameComponent;

    currentDate: Date = new Date(Date.parse("1980/07/01"));

    @Output() onTick = new EventEmitter();

    ngOnInit(){

    }

    tick(){
      this.onTick.emit();
    }
}
