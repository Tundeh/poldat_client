import * as actionTypes from "./actionTypes";
import * as authApi from "../../api/authApi";

// Login Action Creator
export const loginRequest = (creds) => {
  return {type: actionTypes.LOGIN_REQUEST,  payload: {isFetching: true,
    isAuthenticated: false,
    creds}}
}
 export const loginSuccess = (user) => {
   return {type: actionTypes.LOGIN_SUCCESS, payload: {isFetching: false, isAuthenticated: true, user}}
 }

 export const loginFailure = (message) => {
   return {type: actionTypes.LOGIN_FAILURE, payload: {isFetching: false, isAuthenticated: false, message}}
 }

// Logout Action Creators
export const logoutRequest = (creds) => {
  return {type: actionTypes.LOGOUT_REQUEST, payload: {...creds}}
}

export const logoutSuccess = (message) => {
  return {type: actionTypes.LOGOUT_SUCCESS, payload: {isFetching: false, isAuthenticated: false, message}}
}

export const logoutFailure = (message) => {
  return {type: actionTypes.LOGOUT_FAILURE, payload: {isFetching: false, isAuthenticated: false, message}}
}

export const userExist = () => {
  return {type: actionTypes.LOGIN_SUCCESS, payload: {isFetching: false, isAuthenticated: true}}
} 
//check if token exist
export function checkUser(){
  return function(dispatch){
    if(localStorage.getItem("token")){
      return  dispatch(userExist())
    }
    dispatch(loginFailure())
  }
}


//Login User Action
 export function loginUser(creds){
   return function(dispatch){
     dispatch(loginRequest(creds))
     return authApi.login(creds).then(
       ({token, user}) => {
        localStorage.setItem("token", token)         
         dispatch(loginSuccess(user))
       
       }
     ).catch(error => dispatch(loginFailure(error.message)))
   }
 }


 export function logOutUser(creds){
   return function(dispatch){
    dispatch(logoutRequest);
    const token = localStorage.getItem("token");
    if(token){
      dispatch(logoutSuccess);
    } else{
      dispatch(logoutFailure);
    }
   }
 }