//MASIH ERROR JANGAN DIPAKE DULU
import {API} from '../../config';
import axios from 'axios';
import {userConstants} from '../types';

export const userService = {    
    logout,
    register,
    login
};

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(newUser) {
    axios.post(`${API}/${userConstants.REGISTER_REQUEST}`, newUser)
}
//PIKIRIN CARA LANJUTIN LOGINNYA
function login(user){
    axios.post(`${API}/${userConstants.LOGIN_REQUEST}`, user)
}

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }