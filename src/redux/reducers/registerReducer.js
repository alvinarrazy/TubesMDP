import { userConstants } from '../types';

export function register(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {
        User: action.User
      };
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}