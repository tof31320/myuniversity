import { Component, Input, OnInit } from '@angular/core';
import { GameComponent } from '../../game/game.component';
import { Domaine } from '../../model/Domaine';
import { ModuleFormation } from '../../model/ModuleFormation';
import { ServiceModel } from '../../model/ServiceModel.service';
import { Formation } from '../../model/Formation';

@Component({
  selector: 'formation-screen',
  providers: [ ServiceModel ],
  templateUrl: './formation-screen.component.html',
  styleUrls: [ './formation-screen.component.css' ]
})
export class FormationScreenComponent implements OnInit {

  @Input() gameComponent: GameComponent;

  domaines: Domaine[] = new Array();
  modules: ModuleFormation[] = new Array();

  formationSelected: Formation = null;

  constructor(private serviceModel: ServiceModel){}

  ngOnInit(){
    this.serviceModel.getAllDomaines().subscribe(domaines=> this.domaines = domaines);
    this.serviceModel.getAllModulesFormation().subscribe(modules => this.modules = modules);

    this.formationSelected = new Formation();
  }

  selectDomaine(domaine: Domaine){
    this.formationSelected.domaine = domaine;
  }

  toggleModule(m: ModuleFormation){
    if(this.formationSelected.containsModule(m)){
      this.formationSelected.removeModule(m);
    }else{
      this.formationSelected.addModule(m);
    }
  }
}
