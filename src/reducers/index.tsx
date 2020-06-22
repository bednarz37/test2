import { combineReducers } from 'redux';
import brandsReducer from './brands';

export default combineReducers({
  brands: brandsReducer
});
