import { fromJS } from 'immutable';
import * as AUTHENTICATION_ACTIONS from '../actions/authentication';

const initialState = fromJS({
  isLoading: false,
  isLogged: false,
  user: '',
  error: false
});

const authentication = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTHENTICATION_ACTIONS.LOGIN_REQUEST_ACTION:
      return state.setIn(['isLoading'], true);
    case AUTHENTICATION_ACTIONS.LOGIN_SUCCESS_ACTION:
      return state
        .setIn(['isLogged'], true)
        .setIn(['isLoading'], false)
        .setIn(['user'], action.user)
        .setIn(['error'], false);
    case AUTHENTICATION_ACTIONS.LOGIN_ERROR_ACTION:
      return state
        .setIn(['isLogged'], false)
        .setIn(['isLoading'], false)
        .setIn(['user'], null)
        .setIn(['error'], true);
    default:
      return state;
  }
};

export default authentication;
