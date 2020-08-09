import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function navigationReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case types.COLLAPSE_MENU:
      return { ...state, collapse_menu: !action.collapse_menu };
    default:
      return state;
  }
}
