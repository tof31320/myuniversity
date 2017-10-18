import { Component, Input, Output, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { Employee } from '../model/Employee';

@Component({
    selector: 'person-selection',
    templateUrl: './person-selection.component.html',
    styleUrls: [ 'css/dialogs.css', './person-selection.component.css' ]
})
export class PersonSelectionComponent implements OnInit {

    @Input() employees: Employee[] = new Array();
    @Input() modal: boolean = false;

    @Output() onSelection: EventEmitter<Employee> = new EventEmitter<Employee>();

    constructor(private el: ElementRef){}

    ngOnInit(){
    }

    selectPerson(employe: Employee){
      this.onSelection.emit(employe);
    }
}
