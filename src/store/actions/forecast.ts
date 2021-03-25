import { IThreeHourForecast } from '../../interfaces/IThreeHourForecast';
import {
  GetForecastError,
  GetForecastRequest,
  GetForecastSuccess,
  GET_FORECAST_ERROR,
  GET_FORECAST_REQUEST,
  GET_FORECAST_SUCCESS
} from '../types/forecast';

export const getForecastRequest = (cityName: string): GetForecastRequest => ({
  type: GET_FORECAST_REQUEST,
  cityName,
});

export const getForecastError = (errorMessage: string): GetForecastError => ({
  type: GET_FORECAST_ERROR,
  errorMessage,
});

export const getForecastSuccess = (cityName: string, forecast: IThreeHourForecast[]): GetForecastSuccess => ({
  type: GET_FORECAST_SUCCESS,
  cityName,
  forecast,
});
