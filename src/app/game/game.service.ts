import { Injectable } from '@angular/core';

import { Game } from '../model/Game';
import { GameSave } from '../model/GameSave';

@Injectable()
export class GameService {

  LSID_SAVES: string = 'universitySaves';
  LSID_CURRENT: string = 'universityGame';

  getAllGameSaves():GameSave[] {
    if(!localStorage.getItem(this.LSID_SAVES)){
      return new Array();
    }
    let saves: GameSave[] = new Array();
    let json = JSON.parse(localStorage.getItem(this.LSID_SAVES));
    for(let i = 0; i < json.length; i++){
      let gs: GameSave = GameSave.fromJSON(json[i]);

      saves.push(gs);
    }
    return saves;
  }

  getCurrentGame(): Game{
    if(!sessionStorage.getItem(this.LSID_CURRENT)){
      return null;
    }
    let g: Game = Game.fromJSON(JSON.parse(sessionStorage.getItem(this.LSID_CURRENT)));

    return g;
  }

  setCurrentGame(game: Game){
    sessionStorage.setItem(this.LSID_CURRENT, JSON.stringify(game));
  }

  save(game: Game){
    let allSaves:GameSave[] = this.getAllGameSaves();

    if(!allSaves){
      allSaves = new Array();
    }

    let gs: GameSave  = new GameSave(game);

    allSaves.push(gs);

    localStorage.setItem(this.LSID_SAVES, JSON.stringify(allSaves));
  }

  load(index: number){
    let allSaves:GameSave[] = this.getAllGameSaves();

    if(index >= allSaves.length){
      return false;

    }else{
      let gs: GameSave = allSaves[index];

      return gs.game;
    }
  }

  deleteGame(gameSave: GameSave){
    let allSaves:GameSave[] = this.getAllGameSaves();
    let index = -1;

    for(let i = 0; i < allSaves.length; i++){
      if(allSaves[i].id === gameSave.id){
        index = i;
      }
    }

    if(index >= 0){
      allSaves.splice(index, 1);
    }

    localStorage.setItem(this.LSID_SAVES, JSON.stringify(allSaves));
  }

  countGameSaves(){
    return this.getAllGameSaves().length;
  }
}
