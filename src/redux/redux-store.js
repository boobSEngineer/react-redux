import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profille-reducer";
import messageReducer from "./message-reducer";
import navbarReducer from "./navbar-reducer";
import conversationReducer from "./conversation-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagePage:messageReducer,
    navbarPage:navbarReducer,
    conversationPage:conversationReducer,
    userPage:userReducer,
    auth:authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
