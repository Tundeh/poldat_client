import { handleResponse, handleError } from "./apiUtils";

const keys = require("../config/keys");
const baseUrl = keys.apiURL + "member/";

// get list of members
export const getMembers = (props) => {
  
  return fetch(baseUrl).then(handleResponse).catch(handleError);
};

export const getMember = (member) => {
  return fetch(baseUrl + member).then(handleResponse).catch(handleError);
}

export const saveMember = (member) => {
 return fetch(baseUrl, {method: "POST",
 headers: {"content-type": "application/json"},
 body: JSON.stringify(member)}
  ).then(handleResponse).catch(handleError);
}

export const deleteMember = (member) => {
  console.log(member);
  return fetch(baseUrl + member._id, {method: "DELETE"
}).then(handleResponse).catch(handleError);
}