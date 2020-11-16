import { postConstant } from '../types';


export function authentication(state = initialState, action) {
  switch (action.type) {
    case postConstant.GET_ALL_POST:
      return {};
 
    default:
      return state
  }
}