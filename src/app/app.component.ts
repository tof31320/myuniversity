import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Game } from './model/Game';
import { GameSave } from './model/GameSave';
import { GameService } from './game/game.service';

@Component({
  selector: 'my-app',
  providers: [GameService],
  template: `<main-menu *ngIf="gameState === 'menu'" [app]="this"></main-menu>
    <game *ngIf="gameState==='game'" [app]="this" [game]="currentGame"></game>
  `,
})
export class AppComponent implements OnInit {
  gameState: string = 'menu';
  currentGame: Game;

  constructor(private gameService: GameService){
  }

  ngOnInit(){
    this.currentGame = this.gameService.getCurrentGame();
    /*if(this.currentGame != null){
      this.gameState = 'game';
    }*/
  }

  startNewGame(newGame: Game){
    this.currentGame = newGame;
    this.gameState = 'game';

    this.gameService.save(newGame);
    this.gameService.setCurrentGame(newGame);
  }

  showGame(){
    this.gameState = 'game';
  }

  showMenu(){
    this.gameState = 'menu';
  }
}
