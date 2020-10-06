let store = {
    _callSubscriber() {
        console.log('wow')
    },

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

    GetState() {
      return this._state;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCounter: 0
        }
        this._state.profilePage.postElements.push(newPost);

        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;

        this._callSubscriber(this._state);
    },

    addMessage() {
        let newMessage = {
            id: 0,
            message: this._state.messagePage.newMessageText,
        }
        this._state.messagePage.messages.push(newMessage);

        this._callSubscriber(this._state);
    },

    updateNewMessageText(newMessage) {
        this._state.messagePage.newMessageText = newMessage;

        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;
