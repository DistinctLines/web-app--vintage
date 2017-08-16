import { LOGIN_USER } from '../constants/actionTypes';

const initialState = {
  token: 'null',
  id: 0
}

const login = (state = initialState, action) => {


  console.log(action);

  switch(action.type){
    case LOGIN_USER:
      console.log('Login User called!');

      return {
        ...state,
        token: action.token,
        id: action.id
      };
      break;

    default:
      console.log('default state called');
      return state;
  }

}

export default login;
