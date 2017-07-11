import { combineReducers } from 'redux';
import cart from  './cart';
import login from './login';

const reducers = combineReducers({
  login,
  cart
});

export default reducers;
