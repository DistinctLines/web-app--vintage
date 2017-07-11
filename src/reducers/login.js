import { LOGIN_USER } from '../constants/actionTypes';

const initialState = {
  token: 'null'
}

const login = (state = initialState, action) => {


      console.log(action.type);

  switch(action.type){
    case LOGIN_USER:
      console.log('Login User called!');

      return {
        ...state,
        token: action.token
      };
      break;

    default:
      console.log('default state called');
      return state;
  }

}

export default login;
