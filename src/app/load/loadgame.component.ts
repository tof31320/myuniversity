import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

import { Game } from '../model/Game';
import { GameSave } from '../model/GameSave';
import { GameService } from '../game/game.service';

@Component({
  selector: 'load-game',
  templateUrl: './loadgame.component.html',
  providers: [ GameService ],
  styleUrls: [ './loadgame.component.css' ]
})
export class LoadGameComponent implements OnInit {

  gamesaves: GameSave[];

  @Input() app: AppComponent;

  @Output() onGameSelection = new EventEmitter<GameSave>();
  @Output() onGameDeletion = new EventEmitter<GameSave>();

  constructor(private gameService: GameService){
  }

  ngOnInit(){
    this.gamesaves = this.gameService.getAllGameSaves();
  }

  loadGame(gameSave: GameSave){

    this.app.currentGame = gameSave.game;

    this.gameService.setCurrentGame(gameSave.game);
    this.onGameSelection.emit(gameSave);

    this.app.showGame();
  }

  deleteGame(gameSave: GameSave){
    this.onGameDeletion.emit(gameSave);

    this.gameService.deleteGame(gameSave);

    this.gamesaves = this.gameService.getAllGameSaves();
  }
}
