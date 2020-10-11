const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageText
            state.messages.push({id: 0, message: newMessage});
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}
export const addMessageCreate = () => {
    return {type: ADD_MESSAGE}
}

export const updateNewMessageTextCreate = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}

export default messageReducer;



