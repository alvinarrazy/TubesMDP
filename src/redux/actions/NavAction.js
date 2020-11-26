import {navConstant} from '../types';
import {userService} from '../services/userService';
import {history} from '../helpers/history';

export const navOpen = () => {
    return dispatch => {
        dispatch({
            type:navConstant.OPEN_NAV
        })         
    }
}