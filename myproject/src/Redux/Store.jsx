import { applyMiddleware, legacy_createStore ,  combineReducers } from "redux"
import {Reducer as AppReducer} from "./AppReducer/reducer"
import {Reducer as MyAccount} from "./MyAccount/reducer"
import {Reducer as Authentication} from "./Authentication/reducer"
import thunk from "redux-thunk"


const rootReducer = combineReducers({ AppReducer, Authentication ,MyAccount});

// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||compose;


const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store