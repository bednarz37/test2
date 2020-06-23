import { fromJS } from 'immutable';
import * as BRAND_ACTIONS from '../actions/brands';

const initialState = fromJS({
  brandA: { error: false, isLoading: false, loaded: false, info: {} },
  brandB: { error: false, isLoading: false, loaded: false, info: {} }
});

const brands = (state = initialState, action: any) => {
  switch (action.type) {
    case BRAND_ACTIONS.FETCH_BRAND_ACTION:
      return state.setIn([action.brand, 'isLoading'], true);
    case BRAND_ACTIONS.FETCH_BRAND_SUCCESS_ACTION:
      return state
        .setIn([action.payload.brand, 'isLoading'], false)
        .setIn([action.payload.brand, 'loaded'], true)
        .setIn([action.payload.brand, 'info'], fromJS(action.payload.json));
    case BRAND_ACTIONS.FETCH_BRAND_ERROR_ACTION:
      return state
        .setIn([action.payload.brand, 'isLoading', false])
        .setIn([action.payload.brand, 'loaded', true])
        .setIn([action.payload.brand, 'error', true]);
    default:
      return state;
  }
};

export default brands;
