import { postConstant } from '../types';

let allPost = JSON.parse(localStorage.getItem('posts'));
const initialState = allPost ? { currentPost: allPost, choosenPost: [], cardLoaded: false } : { currentPost: [], choosenPost: null, cardLoaded: false }
  ;


export function posts(state = initialState, action) {
  switch (action.type) {
    case postConstant.GET_ALL_POST:
      return { currentPost: allPost }
    case postConstant.CHANGE_CURRENT_POST:
      return { currentPost: allPost }
    case postConstant.GET_POST:
      return state
    case "LOAD_CARDS":
      return {
        ...state,
        cardLoaded: true
      }
    default:
      return state
  }
}