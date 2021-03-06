import { Component, Input, OnInit } from '@angular/core';
import { GameComponent } from '../../game/game.component';
import { Domaine } from '../../model/Domaine';
import { ModuleFormation } from '../../model/ModuleFormation';
import { ServiceModel } from '../../model/ServiceModel.service';
import { Formation } from '../../model/Formation';
import { NgForm } from '@angular/forms';
import { Employee} from '../../model/Employee';
import { Batiment } from '../../model/Batiment';

@Component({
  selector: 'formation-screen',
  providers: [ ServiceModel ],
  templateUrl: './formation-screen.component.html',
  styleUrls: [ 'css/buttons.css', './formation-screen.component.css' ]
})
export class FormationScreenComponent implements OnInit {

  @Input() gameComponent: GameComponent;

  formations: Formation[];

  domaines: Domaine[] = new Array();
  modules: ModuleFormation[] = new Array();

  formationSelected: Formation = null;

  personSelectionDialogOpen: boolean = false;
  moduleSelected: ModuleFormation = null;

  constructor(private serviceModel: ServiceModel){}

  ngOnInit(){
    this.serviceModel.getAllDomaines().subscribe(domaines=> this.domaines = domaines);
    this.serviceModel.getAllModulesFormation().subscribe(modules => this.modules = modules);

    this.formations = this.gameComponent.game.university.formations;
  }

  showFormationForm(){
    this.formationSelected = new Formation();
    console.log(this.formationSelected);
  }

  selectDomaine(domaine: Domaine){
    this.formationSelected.domaine = domaine;
  }

  toggleModule(m: ModuleFormation){
    if(this.formationSelected.containsModule(m)){
      this.formationSelected.removeModule(m);
    }else{
      this.formationSelected.addModule(m.clone());
    }
  }

  saveFormation(){
    if(this.gameComponent.game.saveFormation(this.formationSelected)){
      this.formationSelected = null;
    }
    console.log(" formations", this.gameComponent.game.university.formations);
    this.gameComponent.sync();
  }

  isFormValid(): boolean {
    let ret: boolean = true;

    ret = ret && this.formationSelected.intitule != '';
    ret = ret && this.formationSelected.domaine != null;
    ret = ret && this.formationSelected.modules.length >= this.formationSelected.domaine.nbModulesMin;
    
    for(let i = 0; i < this.formationSelected.modules.length; i++){
      ret = ret && this.formationSelected.modules[i].hVol >= 1;
      ret = ret && this.formationSelected.modules[i].teachers && this.formationSelected.modules[i].teachers.length > 0;
    }

    ret = ret && this.formationSelected.batiment != null;        
    
    return ret;
  }

  cancelEdit(){
    this.formationSelected = null;
  }

  editFormation(formation: Formation){
    this.formationSelected = formation.clone();
  }

  closeFormation(formation: Formation){
    this.gameComponent.game.closeFormation(formation);

    this.gameComponent.sync();
  }

  onHVolumeChange(module: ModuleFormation){
    
  }

  openProfessorsSelectionDialog(module: ModuleFormation){
    this.moduleSelected = module;
    this.personSelectionDialogOpen = true;
  }

  selectPerson(emp: Employee){
    if(this.moduleSelected != null){
      this.moduleSelected.teachers.push(emp);
    }

    this.moduleSelected = null;
    this.personSelectionDialogOpen = false;
  }

  removeProfessorFromModule(module: ModuleFormation, emp: Employee){
    module.removeTeacher(emp);
  }

  updateBatiment(event: any){    
    this.formationSelected.batiment = this.gameComponent.game.university.findBatimentById(Number(event));
    console.log(this.formationSelected);
  }

  compareWithBatimentId(b1: Batiment, b2: Batiment): boolean {
    if(b1 == null || b2 == null){
      return false;
    }
    return b1.id === b2.id;
  }
}
