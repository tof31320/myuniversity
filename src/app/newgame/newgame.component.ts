import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Game } from '../model/Game';

@Component({
  selector: 'newgame',
  templateUrl: './newgame.component.html',
  styleUrls: [ './newgame.component.css' ]
})
export class NewGameComponent implements OnInit {

  newGame: Game = null;

  @Input() app: AppComponent;

  ngOnInit(){
    this.newGame = new Game();
  }

  startGame(){
    this.app.currentGame = this.newGame;
    this.app.showGame();
  }
}
