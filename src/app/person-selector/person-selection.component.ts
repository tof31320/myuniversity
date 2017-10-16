import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';

@Component({
    selector: 'person-selection',
    templateUrl: './person-selection.component.html',
    styleUrls: [ './person-selection.component.css' ]
})
export class PersonSelectionComponent implements OnInit {

    @Input() employees: Employee[] = new Array();

    ngOnInit(){        
    }
}