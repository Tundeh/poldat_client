import * as membersApi from "../../api/membersApi";
import * as actionTypes from "./actionTypes";

export function loadMembersSuccess(members) {
  return {type: actionTypes.LOAD_MEMBERS, members}
}

export function saveMemberSuccess(member) {
  return{type: actionTypes.SAVE_MEMBER_SUCCESS, member}
}


export function saveMemberRequest() {
  return {type: actionTypes.SAVE_MEMBER_REQUEST}
}

export function saveMemberFailure(message) {
  return {type: actionTypes.SAVE_MEMBER_FAILURE, message}
}

export function deleteMemberRequest(){
  return {type: actionTypes.DELETE_MEMBER_REQUEST}
}

export function deleteMemberSuccess(message) {
  return {type: actionTypes.DELETE_MEMBER_SUCCESS, message}
}

export function deleteMemberFailure(message) {
  return {type: actionTypes.DELETE_MEMBER_FAILURE, message}
}

export function loadMemberRequest(){
  return {type: actionTypes.LOAD_MEMBER_REQUEST}
}

export function loadMemberSuccess(member){
  return {type: actionTypes.LOAD_MEMBER_SUCCESS, member}
}

export function loadMemberFailure(message){
  return {type: actionTypes.LOAD_MEMBER_FAILURE, message}
}

export function loadMembers() {
  return function(dispatch){
    return  membersApi.getMembers().then(members => {
    dispatch(loadMembersSuccess(members));
  }).catch(error => {
    console.log(error);
  })
}
}


export function SaveMember(member) {
  return function(dispatch) {
    dispatch(saveMemberRequest())
    return membersApi.saveMember(member).then(savedMember => {
      dispatch(saveMemberSuccess("saved successfully"))
    }).catch(errors => dispatch(saveMemberFailure(errors)))
  }
}

export function deleteMember(member){
  return function(dispatch){
    dispatch(deleteMemberRequest())
    return membersApi.deleteMember(member).then(dispatch(deleteMemberSuccess("Member deleted successfully"))).catch(deleteMemberFailure("Member not deleted"))
  }
}

export function loadMember(id) {
  return function(dispatch){
    dispatch(loadMemberRequest())
    return membersApi.getMember(id).then(member => dispatch(loadMemberSuccess(member))).catch(dispatch(loadMemberFailure("Unable to get member details")))
  }
}