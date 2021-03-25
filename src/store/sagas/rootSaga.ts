import { all, fork } from 'redux-saga/effects';
import forecastSaga from './forecastSaga';

export default function* rootSaga(): Generator {
  yield all([fork(forecastSaga)]);
}
