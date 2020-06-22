import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Forecast } from '../forecast.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  forecast$: Observable<Forecast[]>;

  constructor(private weatherService: WeatherService) {
    this.forecast$ = weatherService.getForecast();
   }

  ngOnInit(): void {
  }

}
