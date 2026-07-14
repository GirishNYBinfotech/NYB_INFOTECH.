import { createStore } from "redux"
import counterReducer from "./Reduser"
const store = createStore(counterReducer)
export default store