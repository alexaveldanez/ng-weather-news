import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';

import { WeatherComponent } from './weather/weather.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [ForecastComponent, WeatherComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ForecastComponent,
    WeatherComponent,
    FontAwesomeModule
  ]
})
export class WeatherModule {

 }
