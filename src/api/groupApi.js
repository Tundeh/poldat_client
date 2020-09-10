import { handleResponse, handleError } from "./apiUtils";
import keys from "../config/keys";
const baseUrl = keys.apiURL + "groups/";


export const getGroups = () => {
return fetch(baseUrl).then(handleResponse).catch(handleError)
}

export const saveGroup = (group) => {
  return fetch(baseUrl,  {
    method: "POST",
    headers: {
      "content-type": "application/json"
    }, 
    body: JSON.stringify(group)
  }).then(handleResponse).catch(handleError)
}

export const deleteGroup = (group) => {
  return fetch(baseUrl, {
    method: "DELETE",
    headers: {
      "content-type": "application/json"
    }
  })
}

export const UpdateGroup = (group) => {
  return fetch(baseUrl, {
    method: "UPDATE",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(group)
  }).then(handleResponse).catch(handleError)
}