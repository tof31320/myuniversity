import { Component, Input } from '@angular/core';
import { Employee } from '../../model/Employee';

@Component({
  selector: 'ui-person',
  templateUrl: './ui-person.component.html',
  styleUrls: [ './ui-person.component.css' ]
})
export class UIPersonComponent {

  @Input() person: Employee;
  detailsPanelVisible: boolean = false;

  showDetails(visible: boolean){
    this.detailsPanelVisible = visible;
  }
}
