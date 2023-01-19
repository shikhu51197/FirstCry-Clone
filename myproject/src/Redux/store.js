import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import {Reducer as AppReducer} from "./AppReducer/reducer"
import UserAccountReducer from "./MyAccount/reducer";
// import {Reducer as Authentication} from "./Authentication/reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({ myProfileData: UserAccountReducer });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
