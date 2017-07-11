import { MOBILE_MENU } from '../constants/actionTypes';

const initialState = {
    status: 'null'
}

const mobile = (state = initialState, action) => {

    switch(action.type){
        case MOBILE_MENU:
            return {
                ...state,
                status: action.status
            };

        default: 
            return state;
    }

}

export default mobile;