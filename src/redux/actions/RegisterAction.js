import {userConstants} from '../types';
import {userService} from '../services/userService';

export const register = (User) => {
    return dispatch => {
        dispatch({
            type: userConstants.REGISTER_REQUEST,
            User: User
        })

        userService.register(User);
    }
}


// function register(newUser) {
//     return dispatch => {
//         dispatch(request(newUser));
//NI NAMBAH SENDIRI         dispatch(success());
        
//         userService.register(newUser)
//             .then(
//                 newUser => { 
//                     dispatch(success());
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                 }
//             );
//     };

//     function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
//     function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
//     function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
// }
