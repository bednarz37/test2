import { put, takeLatest, all } from 'redux-saga/effects';
import * as BRANDS_ACTIONS from '../actions/brands';
import * as AUTHENTICATION_ACTIONS from '../actions/authentication';

function* fetchBrandInfo(action: any) {
  try {
    const brand = action.brand;
    const json = yield fetch(`http://localhost:5000/${brand}`).then(response =>
      response.json()
    );
    const payload = { json, brand };
    yield put({
      type: BRANDS_ACTIONS.FETCH_BRAND_SUCCESS_ACTION,
      payload
    });
  } catch (error) {
    yield put({ type: BRANDS_ACTIONS.FETCH_BRAND_ERROR_ACTION });
  }
}

function* signIn(action: any) {
  try {
    const user = action.payload.email;
    const json = yield fetch(`http://localhost:5000/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type':
          'multipart/form-data, application/x-www-form-urlencoded; charset=utf-8'
      },
      body: JSON.stringify(action.payload)
    }).then(response => response.json());

    //random success or error
    if (Math.random() >= 0.5) {
      yield put({
        type: AUTHENTICATION_ACTIONS.LOGIN_SUCCESS_ACTION,
        user
      });
    } else {
      yield put({ type: AUTHENTICATION_ACTIONS.LOGIN_ERROR_ACTION });
    }
  } catch (error) {
    yield put({ type: AUTHENTICATION_ACTIONS.LOGIN_ERROR_ACTION });
  }
}

function* actionBrandsRoot() {
  yield takeLatest(BRANDS_ACTIONS.FETCH_BRAND_ACTION, fetchBrandInfo);
}

function* actionAuthenticationRoot() {
  yield takeLatest(AUTHENTICATION_ACTIONS.LOGIN_REQUEST_ACTION, signIn);
}

export default function* rootSaga() {
  yield all([actionBrandsRoot(), actionAuthenticationRoot()]);
}
