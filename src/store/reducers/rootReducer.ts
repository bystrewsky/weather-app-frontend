import { combineReducers } from 'redux';

import loaderReducer from './loader';
import forecastReducer from './forecast';

const rootReducer = combineReducers({
  loaderReducer,
  forecastReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
