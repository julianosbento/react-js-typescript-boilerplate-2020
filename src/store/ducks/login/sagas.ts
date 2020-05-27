import { call, put } from 'redux-saga/effects';

import { ApiRoutes } from '../../../config/api/routes';
import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';

export function* login() {
  try {
    const response = yield call(api.get, ApiRoutes.LOGIN);

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
