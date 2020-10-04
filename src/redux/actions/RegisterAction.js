import {userConstants} from '../types';


export const register = (newUser) => {
    return{
        type: userConstants.REGISTER_SUCCESS,
        newUser: newUser
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
