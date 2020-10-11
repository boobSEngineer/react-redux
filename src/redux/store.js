import profileReducer from "./profille-reducer";
import messageReducer from "./message-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        navbarPage: {
            usersDialogs: [
                {id: 1, name: 'Masha'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Dasha'},
                {id: 4, name: 'Ira'},
                {id: 5, name: 'Ko'},
            ],
        },
        messagePage: {
            messages: [
                {id: 1, message: 'I...I...'},
                {id: 2, message: 'HOLY MOLLY'},
                {id: 3, message: 'WOW OWO OWO WOW'},
                {id: 4, message: 'Shit'}
            ],
            newMessageText: '',
        },
        profilePage: {
            postElements: [
                {id: 1, message: 'Wow', likesCounter: 10},
                {id: 2, message: 'I...I..', likesCounter: 0},
                {id: 3, message: 'blblbalbalba', likesCounter: 0}
            ],
            newPostText: '',
        }
    },
    _callSubscriber() {
        console.log('wow')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    GetState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);

        this._callSubscriber(this._state);
    }
}
export default store;




