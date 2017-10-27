import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Game } from '../model/Game';
import { GameService } from '../game/game.service';
import { University } from '../model/University';
import { IAService } from '../model/IA';

@Component({
  selector: 'newgame',
  templateUrl: './newgame.component.html',
  providers: [ IAService ],
  styleUrls: [ './newgame.component.css' ]
})
export class NewGameComponent implements OnInit {

  newGame: Game = null;

  @Input() app: AppComponent;

  constructor(private gameService: GameService, private ia: IAService){
  }

  ngOnInit(){
    this.newGame = new Game();    
    console.log("onInit", this.newGame);
  }

  startGame(){
    this.app.currentGame = this.newGame;
    this.gameService.setCurrentGame(this.newGame);
    console.log(this.newGame);
    this.init(this.app.currentGame);

    this.app.showGame();
  }

  init(game: Game){

    game.world.universities = new Array();
    for(let i = 0; i < game.options.nbOtherUniversities; i++){
      let u: University = this.ia.createUniversity();

      game.world.universities.push(u);
    }
  }
}
