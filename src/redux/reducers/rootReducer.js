import { combineReducers } from 'redux';

//reducers

import { openNav } from './navReducer';
import { posts } from './postReducer';


export const rootReducer = combineReducers({
  openNav,
  posts
});
