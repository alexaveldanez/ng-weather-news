export interface CurrentWeatherResponse {
  main: {
    temp: number
  };
  name: string;
  sys: {
    sunrise: number
    sunset: number
  };
}
