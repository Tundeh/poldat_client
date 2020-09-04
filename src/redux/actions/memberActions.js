import * as membersApi from "../../api/membersApi";
import * as actionTypes from "./actionTypes";
import {apiCallError}  from "./apiStatusActions";

export function loadMemberSuccess(members) {
  return {type: actionTypes.LOAD_MEMBERS, members}
}

export function loadMembers() {
  return function(dispatch){
    return  membersApi.getMembers().then(members => {
    dispatch(loadMemberSuccess(members));
  }).catch(error => {
    console.log(error);
  })
}
}