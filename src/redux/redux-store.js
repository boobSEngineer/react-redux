import {combineReducers, createStore} from "redux";
import profileReducer from "./profille-reducer";
import messageReducer from "./message-reducer";
import navbarReducer from "./navbar-reducer";
import conversationReducer from "./conversation-reducer";
import userReducer from "./user-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagePage:messageReducer,
    navbarPage:navbarReducer,
    conversationPage:conversationReducer,
    userPage:userReducer
})

let store = createStore(reducers);

export default store;
