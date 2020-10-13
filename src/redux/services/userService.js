//MASIH ERROR JANGAN DIPAKE DULU
import {API} from '../../config';
import axios from 'axios';
import {userConstants} from '../types';

export const userService = {    
    logout,
    register,
    login
};

axios.interceptors.request.use(
    config => {
      const { origin } = new URL(config.url);
      const allowedOrigins = [API];
      const token = localStorage.getItem('token');
      if (allowedOrigins.includes(origin)) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(newUser) {
    axios.post(`${API}/${userConstants.REGISTER_REQUEST}`, newUser)
}
//PIKIRIN CARA LANJUTIN LOGINNYA
async function login(user){
    const response = await axios.post(`${API}/${userConstants.LOGIN_REQUEST}`, user);
    console.log(JSON.stringify(response));
    //slocalStorage.setItem(localStorage.setItem('user', JSON.stringify(response)))
}


// function login(user){
//     axios.post(`${API}/${userConstants.LOGIN_REQUEST}`, user);
// }

 function handleResponse(response) {
     return response.text().then(text => {
         const data = text && JSON.parse(text);
         if (!response.ok) {
             if (response.status === 401) {
                 // auto logout if 401 response returned from api
                 logout();
             }
             const error = (data && data.message) || response.statusText;
             return Promise.reject(error);
         }
         return data;
     });
 }