import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {...state, ...action.payload}
    case actionTypes.LOGIN_SUCCESS:
      return {...state, ...action.payload}
    case actionTypes.LOGIN_FAILURE: 
      return {...state, ...action.payload}
    case actionTypes.LOGOUT_REQUEST:
      return {...state, ...action.payload}
    case actionTypes.LOGOUT_SUCCESS:
      return {...state, ...action.payload}
    case actionTypes.LOGOUT_FAILURE: 
      return {...state, ...action.payload}
    default:
      return state
  }
}