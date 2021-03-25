import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import { fetchForecast } from '../../api';
import { IForecastResponse } from '../../interfaces/IForecastResponse';
import { getForecastError, getForecastSuccess } from '../actions/forecast';
import { setLoader } from '../actions/loader';
import { GetForecastRequest, GET_FORECAST_REQUEST } from '../types/forecast';

function* loadForecast(action: GetForecastRequest) {
  try {
    yield put(setLoader(true));

    const data: IForecastResponse = yield call(fetchForecast, action.cityName);

    yield put(getForecastSuccess(data.cityName, data.forecast));
  } catch (err) {
    const errorMessage = err?.response?.data?.message || 'Failed to receive data';

    yield put(getForecastError(Array.isArray(errorMessage) ? errorMessage[0] : errorMessage));
  }

  yield put(setLoader(false));
}

function* watchRequests() {
  yield takeEvery(GET_FORECAST_REQUEST, loadForecast);
}

export default function* forecastSaga(): unknown {
  yield all([fork(watchRequests)]);
}
