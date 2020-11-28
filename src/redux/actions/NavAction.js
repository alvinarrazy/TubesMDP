import {navConstant} from '../types';
import {history} from '../helpers/history';

export const navOpen = () => {
    return dispatch => {
        dispatch({
            type:navConstant.OPEN_NAV
        })         
    }
}