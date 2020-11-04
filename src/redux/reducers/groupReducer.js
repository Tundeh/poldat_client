import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function groupReducer(state=initialState.groups, action) {
  switch(action.type){
    case actionTypes.LOAD_GROUP_REQUEST:

      return {...state, isFetching: true}
      
    case actionTypes.LOAD_GROUP_SUCCESS: 

      return {...state, isFetching: false, groups: action.groups}

    case actionTypes.LOAD_GROUP_FAILURE: 

      return {...state, isFetching: false, message: action.message}

    case actionTypes.SAVE_GROUP_REQUEST:
      return {...state, isSaving: true, message: action.message}
    case actionTypes.SAVE_GROUP_SUCCESS: 
      return {...state, isSaving: false, message: action.message}
    case actionTypes.SAVE_GROUP_FAILURE:
      return {...state, isSaving: false, message: action.message}
    default:
      return state
  }

 }