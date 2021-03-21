import { IThreeHourForecast } from '../../interfaces/IThreeHourForecast';
import {
  GetForecastError,
  GetForecastRequest,
  GetForecastSuccess,
  GET_FORECAST_ERROR,
  GET_FORECAST_REQUEST,
  GET_FORECAST_SUCCESS
} from '../types/forecast';

export const getForecastRequest = (cityName: string): GetForecastRequest => {
  return {
    type: GET_FORECAST_REQUEST,
    cityName,
  };
}

export const getForecastError = (errorMessage: string): GetForecastError => {
  return {
    type: GET_FORECAST_ERROR,
    errorMessage,
  };
}

export const getForecastSuccess = (cityName: string, forecast: IThreeHourForecast[]): GetForecastSuccess => {
  return {
    type: GET_FORECAST_SUCCESS,
    cityName,
    forecast,
  };
}
