import * as actionTypes from "./actionTypes";
import * as groupApi from "../../api/groupApi";

export const loadGroupsRequest = () => {
  return {type: actionTypes.LOAD_GROUP_REQUEST}
}

export const loadGroupsSuccess = (groups) => {
  return {type: actionTypes.LOAD_GROUP_SUCCESS, groups }
}

export const loadGroupsFailure = (message) => {
  return {type: actionTypes.LOAD_GROUP_FAILURE, message}
}

export const saveGroupRequest = () => {
  return {type: actionTypes.SAVE_GROUP_REQUEST}
}

export const saveGroupSuccess = (message) => {
  return {type: actionTypes.SAVE_GROUP_SUCCESS, message}
}

export const saveGroupFailure = (message) => {
  return {type: actionTypes.SAVE_GROUP_FAILURE, message}
}


export function loadGroups() {
  return function(dispatch) {
    dispatch(loadGroupsRequest())
    return groupApi.getGroups().then(groups => dispatch(loadGroupsSuccess(groups))).catch(error => {
      loadGroupsFailure(error)
    })
  }
}
export function saveGroup(group) {
  return function(dispatch) {
    dispatch(saveGroupRequest())
    return groupApi.saveGroup(group).then(saveGroupSuccess("group successfully saved")).catch(
      err => saveGroupFailure("Group saving fail, try again!")
    )
  }
}