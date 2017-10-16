import { Component, Input, OnInit } from '@angular/core';
import { GameComponent } from '../../game/game.component';
import { Employee } from '../../model/Employee';
import { IAService } from '../../model/IA';

@Component({
  selector: 'rh-screen',
  templateUrl: './rh-screen.component.html',
  providers: [ IAService ]
})
export class RHScreenComponent implements OnInit {

  @Input() gameComponent: GameComponent;

  otherEmployees: Employee[] = new Array();

  employees: Employee[];
  showRecrutement: boolean = false;

  constructor(private ia: IAService){}

  ngOnInit(){
    this.employees = this.gameComponent.game.university.employees;    

    this.otherEmployees = this.ia.createPersons(15, {personType: 'employee'}); 
    console.log(this.otherEmployees);
  }

  openRecrutement(){
    this.showRecrutement = true;
  }
  
  closeRecrutement(){
    this.showRecrutement = false;
  }
}
