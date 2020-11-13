import * as actionTypes from "./actionTypes";
import * as usersApi from "../../api/usersApi";

export const saveUserSuccess = (user) => {
 return {type: actionTypes.SAVE_USERS_SUCCESS, user}
}

export const loadUserSuccess = (users) => {
  return {type: actionTypes.LOAD_USERS_SUCCESS, users}
}

export function loadUsers() {
  return function(dispatch) {
    return usersApi.getUsers().then(users => {
      dispatch(loadUserSuccess(users))
    }).catch(error => {
      console.log(error);
    })
  }
}