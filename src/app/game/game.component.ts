import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../model/Game';
import { GameService } from '../game/game.service';
import { ServiceModel } from '../model/ServiceModel.service';
import { AppComponent } from '../app.component';
import { Random } from '../model/Random';

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
    this.serviceModel.getAllLastnames().subscribe(names => Random.allLastnames = names);
    this.serviceModel.getAllFirstnames('M').subscribe(names => Random.allFirstnamesMale = names);
    this.serviceModel.getAllFirstnames('F').subscribe(names => Random.allFirstnamesFemale = names);
    this.serviceModel.getAllAvatars('M').subscribe(avatars => Random.allAvatarsMale = avatars);
    this.serviceModel.getAllAvatars('F').subscribe(avatars => Random.allAvatarsFemale = avatars);

    
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
