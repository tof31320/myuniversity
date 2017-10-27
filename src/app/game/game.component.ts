import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../model/Game';
import { GameService } from '../game/game.service';
import { ServiceModel } from '../model/ServiceModel.service';
import { AppComponent } from '../app.component';
import { Random } from '../model/Random';
import { DB } from '../model/DB';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: [ './game.component.css' ],
  providers: [ServiceModel, GameService]
})
export class GameComponent implements OnInit {

  @Input() app: AppComponent;
  @Input() game: Game;

  menuInGameVisible: boolean = false;

  currentScreen: string = 'dashboard';

  constructor(private gameService: GameService, private serviceModel: ServiceModel){
  }

  ngOnInit(){
    this.serviceModel.getAllLastnames().subscribe(names => DB.lastnames = names);
    this.serviceModel.getAllFirstnames('M').subscribe(names => DB.firstnames['males'] = names);
    this.serviceModel.getAllFirstnames('F').subscribe(names => DB.firstnames['females'] = names);
    this.serviceModel.getAllAvatars('M').subscribe(avatars => DB.avatars['males'] = avatars);
    this.serviceModel.getAllAvatars('F').subscribe(avatars => DB.avatars['females'] = avatars);

    
  }

  showMainMenu(){
    this.menuInGameVisible = true;
  }

  saveGame(){
    this.gameService.save(this.game);
  }

  showScreen(screen: string){
    this.currentScreen = screen;
  }

  quit(){
    this.app.showMenu();
  }

  sync(){

    this.gameService.setCurrentGame(this.game);
  }
}
