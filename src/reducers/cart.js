import { REMOVE_ITEM_CART, ADD_ITEM_CART } from '../constants/actionTypes';

const initialState = [
  {
    _id: '123',
    name: 'food'
  },
]

const cart = (state = initialState, action) => {

  switch(action.type){
    case REMOVE_ITEM_CART:
      return state.filter(item => item._id !== action.id);
    // case ADD_ITEM_CART:
    //   return [
    //     ...state,
    //     {
    //
    //     }
    //   ];
    case ADD_ITEM_CART:
      return [
        ...state,
        action.item
      ];

    default:
      return state;
  }
}

export default cart;
