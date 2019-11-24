import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AgmDirectionModule} from 'agm-direction';
import {AgmCoreModule} from '@agm/core';
import {GoogleService} from '../../services/google.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD4VlTJvcTwOH84kiqzjYm9e5XrTUao6x8',
      libraries: ['geometry', 'places']
    }),
    AgmDirectionModule,
    HttpClientModule
  ],
  providers: [
    GoogleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
