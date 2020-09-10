import { handleResponse, handleError } from "./apiUtils";
import keys from "../config/keys";
const baseUrl = keys.apiURL + "users/";


export const getUsers = () => {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export const saveUser = (user) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(user)
  }).then(handleResponse).catch(handleError);
}

export const deleteUser = (user) => {
  return fetch(baseUrl, {
    method: "DELETE"
  }).then(handleResponse).catch(handleError);
}