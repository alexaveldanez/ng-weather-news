import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon, faCloud, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { WeatherService } from '../weather.service';
import { Weather } from '../weather.model';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentWeatherSub: Subscription;
  currentWeather: Weather;
  isDayTime: boolean;
  currentDateString;
  currentTime;

  constructor(private weatherService: WeatherService, private library: FaIconLibrary) {
    library.addIcons(faSun, faMoon, faCloud, faMapMarkerAlt);
  }


  ngOnInit() {
    this.currentWeatherSub = this.weatherService.getCurrentWeather().subscribe((weather) => {
      this.currentWeather = weather;
      const initSunsetTime = new Date(weather.sunsetTime * 1000);
      const sunsetTime = initSunsetTime.toLocaleTimeString();
      const initSunriseTime = new Date(weather.sunriseTime * 1000);
      const sunriseTime = initSunriseTime.toLocaleTimeString();
      const currentDate = new Date();
      this.isDayTime = (currentDate.getTime() < initSunsetTime.getTime());
      this.isDayTime = (currentDate.getTime() > initSunriseTime.getTime());
    });
    this.currentDateString = new Date().toLocaleDateString();
    this.currentTime = new Date().toLocaleTimeString();
  }
}
