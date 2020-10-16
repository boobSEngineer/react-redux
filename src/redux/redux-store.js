import {combineReducers, createStore} from "redux";
import profileReducer from "./profille-reducer";
import messageReducer from "./message-reducer";
import navbarReducer from "./navbar-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagePage:messageReducer,
    navbarPage:navbarReducer
})

let store = createStore(reducers);

export default store;
