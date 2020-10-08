const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';


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

    dispatch(action) {     //{type: 'NAME'}

        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCounter: 0
            }
            debugger
            this._state.profilePage.postElements.push(newPost);

            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 0,
                message: this._state.messagePage.newMessageText,
            }
            this._state.messagePage.messages.push(newMessage);

            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagePage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}
export default store;

export const addPostActionCreate = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextActionCreate = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const addMessageActionCreate = () => {
    return {type: ADD_MESSAGE}
}

export const updateNewMessageTextActionCreate = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}


