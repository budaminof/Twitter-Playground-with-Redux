import * as types from '../constants/ActionTypes';

const initialState = {
  data: [],
}

export default function data(state = initialState, action) {
  switch (action.type) {
    case types.NEW_DATA:
      return {...state, data: [action.data, ...state.data]};
    case types.SEARCH_TERM:
      return {...state, data: []};
    default:
      return state;
  }
}
