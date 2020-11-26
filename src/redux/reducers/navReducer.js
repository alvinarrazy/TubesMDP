import { navConstant } from '../types';

const initialState = {
  navOpen: false
}

export function openNav(state = initialState, action) {
  switch (action.type) {
    case navConstant.OPEN_NAV:
      return {
        ...state,
        navOpen: !state.navOpen
      }
    default:
      return state;
  }
}