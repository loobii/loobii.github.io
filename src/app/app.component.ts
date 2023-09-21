import { Component } from '@angular/core';
import { LocationDetail } from './interfaces/location-detail';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faArrowsRotate = faArrowsRotate;
  locationId: number = -1;
  locationIdOld: number = -1;

  //TODO: Locations aus DB abfragen.
  restaurantLocations: LocationDetail[] = [{
    locationId: 0,
    category: 'Hamburg Innenstadt',
    foodCategory: ['Italienisch', 'Pasta'],
    name: 'VAPIANO Kurze Mühren',
    imageUrl: 'https://placehold.co/325',
    lat: 53.553131,
    lng: 10.002770
  }, {
    locationId: 1,
    category: 'Hamburg Innenstadt',
    foodCategory: ['Italienisch', 'Pizza', 'Pasta'],
    name: 'L\'Osteria  Opernplaza',
    imageUrl: 'https://placehold.co/325',
    lat: 53.557190,
    lng: 9.988240
  }, {
    locationId: 2,
    category: 'Hamburg Innenstadt',
    foodCategory: ['Italienisch', 'Pizza', 'Pasta'],
    name: 'Andronaco HafenContor',
    imageUrl: 'https://placehold.co/325',
    lat: 53.543670,
    lng: 9.996820
  }, {
    locationId: 3,
    category: 'Hamburg Innenstadt',
    foodCategory: ['Italienisch', 'Pizza', 'Neapolitanische Pizza'],
    name: 'Spaccaforno',
    imageUrl: 'https://placehold.co/325',
    lat: 53.548890,
    lng: 9.991980
  }, {
    locationId: 4,
    category: 'Hamburg Innenstadt',
    foodCategory: ['Italienisch', 'Pizza', 'Neapolitanische Pizza'],
    name: '60 Seconds To Napoli',
    imageUrl: 'https://placehold.co/325',
    lat: 53.548550,
    lng: 9.990430
  }, {
    locationId: 5,
    category: 'Hamburg Innenstadt',
    foodCategory: ['Steakhaus', 'Steaks'],
    name: 'BLOCK HOUSE Jungfernstieg',
    imageUrl: 'https://placehold.co/325',
    lat: 53.551670,
    lng: 9.994160
  }, {
    locationId: 6,
    category: 'Hamburg Innenstadt',
    foodCategory: ['Indisch'],
    name: 'Badshah',
    imageUrl: 'https://placehold.co/325',
    lat: 53.554000,
    lng: 10.011330
  }, {
    locationId: 7,
    category: 'Hamburg Innenstadt',
    foodCategory: ['Burger', 'Pommes Frites'],
    name: 'PETER PANE Burgergrill & Bar',
    imageUrl: 'https://placehold.co/325',
    lat: 53.551480,
    lng: 9.987640
  }, {
    locationId: 8,
    category: 'Hamburg Innenstadt',
    foodCategory: ['Burger', 'Pommes Frites'],
    name: 'HANS IM GLÜCK - Altes Rathaus',
    imageUrl: 'https://placehold.co/325',
    lat: 53.548587,
    lng: 9.992487
  }, {
    locationId: 9,
    category: 'Hamburg Innenstadt',
    foodCategory: ['Burger', 'Pommes Frites'],
    name: 'Shiso Burger',
    imageUrl: 'https://placehold.co/325',
    lat: 53.550550,
    lng: 10.001952
  }, {
    locationId: 10,
    category: 'Hamburg Innenstadt',
    foodCategory: ['Türkisch', 'Kurdisch'],
    name: 'bona\'me',
    imageUrl: 'https://placehold.co/325',
    lat: 53.548744,
    lng: 10.001323
  }];

  locationDetail!: LocationDetail;

  randomLocation(): void {
    this.locationId = Math.floor(Math.random() * this.restaurantLocations.length);

    if (this.locationId === this.locationIdOld) {
      this.randomLocation();
    }
    else {
      this.locationIdOld = this.locationId;
      this.locationDetail = this.restaurantLocations[this.locationId];
    }
  }
}
