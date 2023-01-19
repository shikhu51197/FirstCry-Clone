import { combineReducers } from "redux";

import UserAccountReducer from "./reducer";
const rootReducer = combineReducers({
  myProfileData: UserAccountReducer,
});

export default rootReducer;
