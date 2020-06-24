import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, switchMap, pluck, mergeMap, filter, toArray, share, tap, catchError, retry } from 'rxjs/operators';

import { OpenWeatherResponse } from './open-weather.response';
import { NotificationsService } from '../notifications/notifications.service';
import { CurrentWeatherResponse } from './current-weather.response';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(
    private http: HttpClient,
    private notificationsService: NotificationsService
    ) { }

  getCurrentWeather() {
    return this.getCurrentLocation().pipe(
      map(coords => {
        return new HttpParams()
        .set('lat', String(coords.latitude))
        .set('lon', String(coords.longitude))
        .set('units', 'imperial')
        .set('appid', 'cb4963516c6476a202fd162fb6bbdbe8');
      }),
      switchMap(params => this.http.get<CurrentWeatherResponse>(this.weatherUrl, { params })),
      map((value) => {
        return {
          temp: value.main.temp,
          city: value.name,
          sunriseTime: value.sys.sunrise,
          sunsetTime: value.sys.sunset
        };
      })
      );
  }

  getForecast() {
    return this.getCurrentLocation().pipe(
      map(coords => {
        return new HttpParams()
        .set('lat', String(coords.latitude))
        .set('lon', String(coords.longitude))
        .set('units', 'imperial')
        .set('appid', 'cb4963516c6476a202fd162fb6bbdbe8');
      }),
      // switchMap - an observable the emits the newest value and deletes the previous old value
      switchMap(params => this.http.get<OpenWeatherResponse>(this.forecastUrl, { params })
      ),
      // pluck - pull value out of the object that is being emitted from the http response
      pluck('list'),
      // merge map - returns an observable for each value/record in the object one by one.
      // of - Emits each value one by one from an object
      mergeMap(value => of(...value)),
      // filter - returns value only if the value equals every 8th item in the record
      filter((value, index) => index % 8 === 0),
      // map - pull out values from objects coming thru
      map(value => {
        return {
          dateString: value.dt_txt,
          temp: value.main.temp
        };
      }),
      // toArray - will put each value into an array of objects
      toArray(),
      // share - only makes one requst if you subscribe to the observable multiple times
      share()
    );
  }

  getCurrentLocation() {
    return new Observable<Coordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => observer.error(err)
      );
    }).pipe(
      retry(1),
      tap(() => {
        this.notificationsService.addSuccess('Got your location');
      }
    ),
    catchError((err) => {
      // handle error
      this.notificationsService.addError('Failed to get your location');
      // return a new observable
      return throwError(err);
    })
    );
  }

}
