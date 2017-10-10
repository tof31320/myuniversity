import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Game } from '../model/Game';
import { GameService } from '../game/game.service';

@Component({
  selector: 'newgame',
  templateUrl: './newgame.component.html',
  styleUrls: [ './newgame.component.css' ]
})
export class NewGameComponent implements OnInit {

  newGame: Game = null;

  @Input() app: AppComponent;

  constructor(private gameService: GameService){
  }

  ngOnInit(){
    this.newGame = new Game();
  }

  startGame(){
    this.app.currentGame = this.newGame;
    this.gameService.setCurrentGame(this.newGame);
    this.app.showGame();
  }
}
