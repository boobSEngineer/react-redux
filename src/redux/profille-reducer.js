import {profileAPI} from "../API/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    postElements: [
        {id: 1, message: 'Wow', likesCounter: 10},
        {id: 2, message: 'I...I..', likesCounter: 0},
        {id: 3, message: 'blblbalbalba', likesCounter: 0}
    ],
    newPostText: '',
    profile: null,
    status: ' ',
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
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
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

export const setUserStatusCreate = (status) => {
    return {type: SET_USER_STATUS, status: status}
}


export const getProfileThunkCreate = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfileCreate(data));
            });
    }
}

export const getUserStatusThunkCreate = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setUserStatusCreate(data));
            });
    }
}

export const updateUserStatusThunkCreate = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(data => {
                if (data != null) {
                    dispatch(setUserStatusCreate(status));
                }
            });
    }
}


export default profileReducer;
