import { combineReducers } from 'redux';

//reducers
import { authentication } from './loginReducer';
import { register } from './registerReducer';
import { openNav } from './navReducer';
import { posts } from './postReducer';


export const rootReducer = combineReducers({
  authentication,
  register,
  openNav,
  posts
});
