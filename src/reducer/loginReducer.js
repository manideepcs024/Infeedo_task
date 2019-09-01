import initialState from './initialState';
import * as actionTypes from '../constants/actionTypes';

export default function loginReducer(state=initialState.loginuser,action){
    switch(action.type){
        case actionTypes.USER_LOGIN_DETAIL_SUCCESS:
            return action.payload;

        default:
        return state;

    }

}