import { IThreeHourForecast } from './IThreeHourForecast';

export interface IForecastResponse {
  cityName: string;
  forecast: IThreeHourForecast[];
}
