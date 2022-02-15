import { combineReducers } from "redux";
import auth from "./auth";
import homepage from "./homepage";
import store from "./store";
import task from "./task";
import account from "./account";

const rootReducer = combineReducers({
  auth,
  homepage,
  store,
  task,
  account
});

export default rootReducer;
