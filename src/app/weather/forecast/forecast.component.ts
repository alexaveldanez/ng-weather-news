import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ForecastService } from '../forecast.service';
import { Forecast } from '../forecast.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  forecast$: Observable<Forecast[]>;

  constructor(private forecastService: ForecastService) {
    this.forecast$ = forecastService.getForecast();
   }

  ngOnInit(): void {
  }

}
