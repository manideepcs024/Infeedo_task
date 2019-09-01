import * as URL from '../constants/constantValue';
import * as actionTypes from '../constants/actionTypes';
import * as utilActions from '../components/common/utils';

export function loginDetailsFetchSuccess(validUser, loggedIn) {
    let message = "";
    if (!validUser) message = "User does not exist";
    if (!loggedIn) message = "Invalid Password";
    return { type: actionTypes.USER_LOGIN_DETAIL_SUCCESS, payload: { validUser: validUser, loggedIn: loggedIn, message: message } };
}

export function loginDetailsFetchRequest(userDetails) {
    let validUser = false;
    let loggedIn = false;
    return function (dispatch) {


        validUser = true;
        if (userDetails.username === 'mani' && userDetails.password === '1') {
            loggedIn = true;
            utilActions.saveLoginStatus();


        }
        return dispatch(loginDetailsFetchSuccess(validUser, loggedIn));



    };
}