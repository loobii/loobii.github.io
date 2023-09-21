import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { LocationDetail } from 'src/app/interfaces/location-detail';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent {
  faArrowsRotate = faArrowsRotate;
  @Input() locationDetail!: LocationDetail;
  @Output() rndLocation: EventEmitter<any> = new EventEmitter();
}
