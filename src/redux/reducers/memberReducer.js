import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function memberReducer(state = initialState.members, action){
  switch (action.type) {
    case actionTypes.LOAD_MEMBERS:
      return action.members;
    default: 
      return state;
  }
}