import { applyMiddleware, legacy_createStore ,  combineReducers } from "redux"
import {Reducer as AppReducer} from "./AppReducer/reducer"
import {Reducer as MyAccount} from "./MyAccount/reducer"
import {Reducer as Authentication} from "./Authentication/reducer"
import {Reducer as AuthReducer} from "./AuthReducer/reducer"


import thunk from "redux-thunk"


 const rootReducer = combineReducers({ AuthReducer ,AppReducer , Authentication ,MyAccount});

// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||compose;


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

