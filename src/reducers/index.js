import { combineReducers } from 'redux';
import cart from  './cart';
import login from './login';
import mobile from './mobile';

const reducers = combineReducers({
  login,
  cart,
  mobile
});

export default reducers;
