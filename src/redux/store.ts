import { login_reducer } from './login_reducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    login_reducer
});

export type StateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));