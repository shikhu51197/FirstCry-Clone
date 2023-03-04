import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import { Reducer as AppReducer } from "./AppReducer/reducer";
import { Reducer as MyAccount } from "./MyAccount/reducer";
import { Reducer as Authentication } from "./Authentication/reducer";
import { Reducer as AdminAuthReducer } from "./AuthReducer/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  AdminAuthReducer,
  AppReducer,
  Authentication,
  MyAccount,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
