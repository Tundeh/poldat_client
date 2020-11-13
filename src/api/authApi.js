import { handleError, handleResponse } from "./apiUtils";

const keys = require("../config/keys");
const baseUrl = keys.apiURL + "auth/login/";

export const login = (userInfo) => {
  console.log(JSON.stringify(userInfo));
   return fetch(baseUrl, {
     method: "POST",
     headers: {
       "content-type": "application/json"
     },
    body: JSON.stringify(userInfo)
   }).then(handleResponse).catch(handleError);
}
export const logout = (userInfo) => {
  
}