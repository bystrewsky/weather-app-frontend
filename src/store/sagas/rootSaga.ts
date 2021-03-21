import { all, fork } from 'redux-saga/effects';
import forecastSaga from './forecastSaga';

export default function* rootSaga() {
  yield all([fork(forecastSaga)]);
}
