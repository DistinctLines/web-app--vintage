import { REMOVE_ITEM_CART, ADD_ITEM_CART, LOGIN_USER} from '../constants/actionTypes';

export const remove_item = id => ({ type: REMOVE_ITEM_CART, id });
export const add_item = item => ({ type: ADD_ITEM_CART, item });
export const login_user = token => ({ type: LOGIN_USER, token });
