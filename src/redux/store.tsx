import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";



const reducers = combineReducers({

})
console.log(reducers)
export const store = createStore(reducers, applyMiddleware(thunk));