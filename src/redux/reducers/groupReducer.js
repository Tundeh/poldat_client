import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function groupReducer(state=initialState.groups, action) {
  switch(action.type){
    case actionTypes.LOAD_GROUP_SUCCESS: 
    return action.groups
    default:
      return state
  }

 }