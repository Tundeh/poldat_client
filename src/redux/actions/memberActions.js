import * as membersApi from "../../api/membersApi";
import * as actionTypes from "./actionTypes";
import {apiCallError}  from "./apiStatusActions";

export function loadMemberSuccess(members) {
  return {type: actionTypes.LOAD_MEMBERS, members}
}
export function saveMemberSuccess(member) {
  return{type: actionTypes.SAVE_MEMBER_SUCCESS, member}
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


export function SaveMember(member) {
  return function(dispatch) {
    return membersApi.saveMember(member).then(savedMember => {
      dispatch(saveMemberSuccess(savedMember))
    })
  }
}