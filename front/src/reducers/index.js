import { combineReducers } from "redux";
import signup from "./signup.reducer";
import login from "./login.reducer";

export default combineReducers({
  signup,
  login,
});