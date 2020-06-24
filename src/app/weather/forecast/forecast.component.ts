import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import { Forecast } from '../forecast.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  forecast$: Observable<Forecast[]>;

  constructor(private weatherService: WeatherService, private library: FaIconLibrary) {
    this.forecast$ = weatherService.getForecast();
    this.library.addIcons(faSun);
   }

}
