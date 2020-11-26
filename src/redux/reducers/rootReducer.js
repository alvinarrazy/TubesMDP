import { combineReducers } from 'redux';

//reducers
import { authentication } from './loginReducer';
import { register } from './registerReducer';
import { openNav } from './navReducer';


export const rootReducer = combineReducers({
  authentication,
  register,
  openNav
});
