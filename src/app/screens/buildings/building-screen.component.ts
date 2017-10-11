import { Component, Input, OnInit } from '@angular/core';
import { GameComponent} from '../../game/game.component';
import { Batiment } from '../../model/Batiment';
import { TypeBatiment } from '../../model/TypeBatiment';
import { ServiceModel } from '../../model/ServiceModel.service';

@Component({
  selector: 'building-screen',
  providers: [ ServiceModel ],
  templateUrl: './building-screen.component.html',
  styleUrls: [ 'css/buttons.css', './building-screen.component.css' ]
})
export class BuildingScreenComponent implements OnInit {

  @Input() gameComponent: GameComponent;

  batiments: Batiment[];
  typesBatiment: TypeBatiment[] = new Array();

  buildFormVisible: boolean = false;

  constructor(private modelService: ServiceModel){}

  ngOnInit(){
    this.batiments = this.gameComponent.game.university.batiments;
    console.log(this.batiments);
    this.modelService.getAllTypesBatiment()
      .subscribe(types => this.typesBatiment = types,
                error => console.log("ERREUR: Récup type de batiment", error),
                () => console.log("OK"));
  }

  showBuildForm(){
    this.buildFormVisible = true;
  }

  closeBuildForm(){
    this.buildFormVisible = false;
  }

  build(type: TypeBatiment){
    this.gameComponent.game.build(type);
    this.gameComponent.sync();

    this.closeBuildForm();
  }
}
