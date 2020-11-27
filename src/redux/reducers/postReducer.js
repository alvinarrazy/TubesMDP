import { postConstant } from '../types';

let allPost = JSON.parse(localStorage.getItem('posts'));
const initialState = allPost ? 
    { currentPost: allPost } : {currentPost: []};


export function posts(state = initialState, action) {
  switch (action.type) {
    case postConstant.GET_ALL_POST:
      return {};
    case postConstant.CHANGE_CURRENT_POST:
      
    default:
      return state
  }
}