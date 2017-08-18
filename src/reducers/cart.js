import { REMOVE_ITEM_CART, ADD_ITEM_CART } from '../constants/actionTypes';

const initialState = [
  {
    name: 'food',
    cost: 16,
    quantity: 1
  }
]

const cart = (state = initialState, action) => {

  switch(action.type){
    case REMOVE_ITEM_CART:
      return state.filter(item => item._id !== action.id);

    case ADD_ITEM_CART:
      console.log('REDUCER: added item to cart');

      return [
        ...state,
        action.item
      ];

    default:
      return state;
  }
}

export default cart;
