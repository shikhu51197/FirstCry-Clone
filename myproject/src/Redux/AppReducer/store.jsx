import { legacy_createStore } from "redux"
import Reducer from "./reducer"

const store=legacy_createStore(Reducer)

export default store