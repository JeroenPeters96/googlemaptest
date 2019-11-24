import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import {GoogleService} from '../../services/google.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AGM project';

  constructor(google: GoogleService) {
    this.google = google;
  }

  public lat = 24.799448;
  public lng = 120.979021;

  private google: GoogleService;

  public origin: any;
  public destination: any;

  public renderOptions = {
    suppressMarkers: true,
  };

  public markerOptions = {
    origin: {
      icon: 'https://i.imgur.com/7teZKif.png',
      draggable: true,
    },
    destination: {
      icon: 'https://i.imgur.com/7teZKif.png',
      draggable: true
    },
  };

  ngOnInit() {
    this.getDirection();
    this.google.lookup('Hoogheidseweg+15+Venray')
      .subscribe(
        (data: any) => {
          console.log('found data:');
          console.log(data);
        }
      );
  }

getDirection() {
    this.origin = { lat: 24.799448, lng: 120.979021 };
    this.destination = { lat: 24.799524, lng: 120.975017 };
  }
}
