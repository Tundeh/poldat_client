import * as actionTypes from "./actionTypes";
import * as groupApi from "../../api/groupApi";

export const loadGroupsSuccess = (user) => {
  return {type: actionTypes.SAVE_GROUP_SUCCESS, user }
}


export function loadGroups(users) {
  return function(dispatch) {
    return groupApi.getGroups().then(groups => dispatch(loadGroupsSuccess(groups)))
  }
}