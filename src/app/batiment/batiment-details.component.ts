import { Component, Input } from '@angular/core';
import { Batiment } from '../model/Batiment';
import { TypeBatiment } from '../model/TypeBatiment';

@Component({
    selector: 'batiment-details',
    templateUrl: './batiment-details.component.html',
    styleUrls: [ './batiment-details.component.css' ]
})
export class BatimentDetailsComponent {

    @Input() batiment: Batiment;
}