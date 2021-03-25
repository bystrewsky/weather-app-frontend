import { combineReducers } from 'redux';

import loaderReducer from './loader';
import forecastReducer from './forecast';

const rootReducer = combineReducers({
  loader: loaderReducer,
  forecast: forecastReducer
});

export default rootReducer;
