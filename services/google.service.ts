import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class GoogleService {

  constructor(private http: HttpClient) {
  }

  lookup(address: string) {
    let bareUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    bareUrl += address;
    bareUrl += '&key=AIzaSyD4VlTJvcTwOH84kiqzjYm9e5XrTUao6x8';
    return this.http.get(bareUrl);
  }


}
