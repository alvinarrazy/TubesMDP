import {combineReducers} from 'redux';

//reducers
import {authentication} from './authenticationReducer';
import {register} from './registerReducer';


export const rootReducer = combineReducers({
    authentication,
    register
  });
  