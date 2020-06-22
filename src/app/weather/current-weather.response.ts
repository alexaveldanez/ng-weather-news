export interface CurrentWeatherResponse {
  main: {
    temp: number
  };
  name: string;
  sys: {
    sunset: number
  };
}
