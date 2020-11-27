import { postConstant } from '../types';


export function posts(state = {}, action) {
  switch (action.type) {
    case postConstant.GET_ALL_POST:
      return {};
 
    default:
      return state
  }
}