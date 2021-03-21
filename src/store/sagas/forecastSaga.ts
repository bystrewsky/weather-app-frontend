import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import { fetchForecast } from '../../api';
import { IForecastResponse } from '../../interfaces/IForecastResponse';
import { getForecastError, getForecastSuccess } from '../actions/forecast';
import { GetForecastRequest, GET_FORECAST_REQUEST } from '../types/forecast';

function* loadForecast({ cityName }: GetForecastRequest ) {
  try {
    const data: IForecastResponse = yield call(fetchForecast, cityName);
    yield put(getForecastSuccess(data.cityName, data.forecast));
  } catch (err) {
    yield put(getForecastError(err.response.data.message));
  }
}

function* watchRequests() {
  yield takeEvery(GET_FORECAST_REQUEST, loadForecast);
}

export default function* forecastSaga(): unknown {
  yield all([fork(watchRequests)]);
}
