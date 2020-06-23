import { combineReducers } from 'redux';
import brandsReducer from './brands';
import authenticationReducer from './authentication';

export default combineReducers({
  brands: brandsReducer,
  authentication: authenticationReducer
});
