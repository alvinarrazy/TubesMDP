import {userConstants} from '../types';
import {userService} from '../services/userService';
import {history} from '../helpers/history';

export const login = (user) => {
    return dispatch => {
        dispatch({
            type: userConstants.LOGIN_REQUEST,
            user: user
        })
        console.log(user);
        userService.login(user);
         
    }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    // function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}