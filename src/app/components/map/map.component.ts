import { Component, AfterViewInit, Input, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @Input() lat!: number
  @Input() lng!: number;

  ngAfterViewInitDone: boolean = false;

  private map!: L.Map;
  private locationMarker!: L.Marker<any>;

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.lat, this.lng],
      zoom: 15,
      dragging: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      minZoom: 14,

      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.addLocationMarker(this.lat, this.lng);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.ngAfterViewInitDone = true;
  }

  ngOnChanges(change: SimpleChanges) {
    if (this.ngAfterViewInitDone) {
      this.map.panTo([this.lat, this.lng]);
      this.addLocationMarker(this.lat, this.lng);
    }
  }

  addLocationMarker(latitude: number, longitude: number) {
    if (this.locationMarker) { this.map.removeLayer(this.locationMarker) };

    this.locationMarker = L.marker([latitude, longitude]).addTo(this.map);
  }
}
