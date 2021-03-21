import { IThreeHourForecast } from '../../interfaces/IThreeHourForecast';

export const GET_FORECAST_REQUEST = '@@forecast/GET_FORECAST_REQUEST';
export interface GetForecastRequest {
  type: typeof GET_FORECAST_REQUEST;
  cityName: string;
}

export const GET_FORECAST_ERROR = '@@forecast/GET_FORECAST_ERROR';
export interface GetForecastError {
  type: typeof GET_FORECAST_ERROR;
  errorMessage: string;
}

export const GET_FORECAST_SUCCESS = '@@forecast/GET_FORECAST_SUCCESS';
export interface GetForecastSuccess {
  type: typeof GET_FORECAST_SUCCESS;
  cityName: string;
  forecast: IThreeHourForecast[];
}

export type ForecastAction =
 | GetForecastRequest
 | GetForecastError
 | GetForecastSuccess;
