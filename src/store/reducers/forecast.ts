import { IThreeHourForecast } from '../../interfaces/IThreeHourForecast';
import { ForecastAction, GET_FORECAST_ERROR, GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS } from '../types/forecast';

export interface IForecastState {
  cityName: string;
  forecast: IThreeHourForecast[];
  isErrored: boolean;
  isLoaded: boolean;
  errorMessage: string;
}

const initialState: IForecastState = {
  cityName: '',
  forecast: [],
  isErrored: false,
  isLoaded: false,
  errorMessage: '',
}

const forecastReducer = (state: IForecastState = initialState, action: ForecastAction): IForecastState => {
  switch (action.type) {
    case GET_FORECAST_REQUEST:
      return {
        ...state,
        cityName: action.cityName,
      };
    case GET_FORECAST_ERROR:
      return {
        ...state,
        isErrored: true,
        isLoaded: false,
        errorMessage: action.errorMessage,
        forecast: [],
      };
    case GET_FORECAST_SUCCESS:
      return {
        ...state,
        isErrored: false,
        isLoaded: true,
        errorMessage: '',
        forecast: action.forecast,
      };
    default: return state;
  }
}

export default forecastReducer;
