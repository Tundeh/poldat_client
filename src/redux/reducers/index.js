import {combineReducers} from "redux";
import navigationReducer from "./navigationReducer";
import members from "./memberReducer";
import users from "./userReducer";
import groups from "./groupReducer";

const rootReducer = combineReducers({
  navigationReducer,
  members,
  users,
  groups
})

export default rootReducer;