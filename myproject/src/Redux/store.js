import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import myAccountReducer from "./MyAccount/reducer";

const store = legacy_createStore(myAccountReducer, applyMiddleware(thunk));

export default store;
