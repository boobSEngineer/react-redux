import {headerAPI} from "../API/api";

const SET_AUTH_DATA_USER = 'SET-AUTH-DATA-USER'


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA_USER: {
            return {
                    ...state,
                    ...action.data,
                    isAuth:true
                }
            }
        default:
            return state;
    }
}
export const authUserCreate = (userId, login, email) => {
    return {type: SET_AUTH_DATA_USER, data:{userId, login, email}}
}

export const authUserThunkCreate = () => {
    return (dispatch) => {
        headerAPI.getLogin()
            .then(data => {
                if (data !== null) {
                    let {id, login, email} = data.data;
                    dispatch(authUserCreate(id, login, email));
                }
            })
    }
}

export default authReducer;
