export const LOGIN_REQUEST_ACTION = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS_ACTION = 'LOGIN_SUCCESS';
export const LOGIN_ERROR_ACTION = 'LOGIN_ERROR';

export const signIn = (payload: object) => ({
  type: LOGIN_REQUEST_ACTION,
  payload
});
