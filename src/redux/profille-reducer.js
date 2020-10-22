const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    postElements: [
        {id: 1, message: 'Wow', likesCounter: 10},
        {id: 2, message: 'I...I..', likesCounter: 0},
        {id: 3, message: 'blblbalbalba', likesCounter: 0}
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCounter: 0
            };
            return {
                ...state,
                postElements: [...state.postElements, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText:action.newText
            };
        }
        default:
            return state;
    }
}
export const addPostCreate = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextCreate = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


export default profileReducer;
