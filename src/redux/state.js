let RenderEntireTree = () => {}

let state = {
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
};

window.state = state;

export default state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCounter: 0
    }
    state.profilePage.postElements.push(newPost);

    RenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;

    RenderEntireTree(state);
};

export const addMessage = () => {
    let newMessage = {
        id: 0,
        message: state.messagePage.newMessageText,
    }
    state.messagePage.messages.push(newMessage);

    RenderEntireTree(state);
}

export const updateNewMessageText = (newMessage) => {
    state.messagePage.newMessageText = newMessage;

    RenderEntireTree(state);
}

export const subscribe = (observer) => {
    RenderEntireTree = observer;
}


