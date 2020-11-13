import {combineReducers} from "redux";
import navigationReducer from "./navigationReducer";
import members from "./memberReducer";
import users from "./userReducer";
import groups from "./groupReducer";
import auth from "./authReducer";

const rootReducer = combineReducers({
  navigationReducer,
  members,
  users,
  groups,
  auth
})

export default rootReducer;