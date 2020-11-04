import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function memberReducer(state = initialState.members, action){
  switch (action.type) {
    case actionTypes.LOAD_MEMBERS:
      return {...state, members: action.members};
    case actionTypes.SAVE_MEMBER_SUCCESS:
      return {...state, isSaving: false, message: action.message}
    case actionTypes.SAVE_MEMBER_REQUEST:
      return {...state, isSaving: true}
    case actionTypes.SAVE_MEMBER_FAILURE:
      return {...state, isSaving: false, message: action.message}
    case actionTypes.DELETE_MEMBER_REQUEST: 
      return {...state, isDeleting: true}
    case actionTypes.DELETE_MEMBER_SUCCESS:
      return {...state, isDeleting: false, message: action.message}
    case actionTypes.DELETE_MEMBER_FAILURE:
      return {...state, members: (state.members.filter(member => member.id !== action.member.id)), isDeleting: false, message: action.message}
    case actionTypes.LOAD_MEMBER_REQUEST:
      return {...state, isFetching: true}
    case actionTypes.LOAD_MEMBER_SUCCESS:
      return {...state, isFetching: false, member: action.member}
    case actionTypes.LOAD_MEMBER_FAILURE: 
      return {...state, isFetching: false, message: action.message}
    default: 
      return state;
  }
}