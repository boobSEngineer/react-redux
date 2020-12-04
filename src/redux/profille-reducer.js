const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    postElements: [
        {id: 1, message: 'Wow', likesCounter: 10},
        {id: 2, message: 'I...I..', likesCounter: 0},
        {id: 3, message: 'blblbalbalba', likesCounter: 0}
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
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
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText:action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
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

export const setUserProfileCreate = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}




export default profileReducer;
