import { combineReducers } from 'redux';
import cart from  './cart';
import login from './login';
import items from './items';

const reducers = combineReducers({
  login,
  cart,
  items
});

export default reducers;
