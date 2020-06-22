import { put, takeLatest, all } from 'redux-saga/effects';
import * as BRANDS_ACTIONS from '../actions/brands';

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

function* actionBrandsRoot() {
  yield takeLatest(BRANDS_ACTIONS.FETCH_BRAND_ACTION, fetchBrandInfo);
}

export default function* rootSaga() {
  yield all([actionBrandsRoot()]);
}
