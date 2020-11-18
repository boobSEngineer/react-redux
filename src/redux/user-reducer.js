const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE_CURRENT = 'SET-PAGE-CURRENT';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';


let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_PAGE_CURRENT: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        default:
            return state;
    }
}
export const followCreate = (userId) => {
    return {type: FOLLOW, userId}
}

export const unfollowCreate = (userId) => {
    return {type: UNFOLLOW, userId}
}

export const userSetCreate = (users) => {
    return {type: SET_USERS, users}
}

export const setCurrentPageCreate = (currentPage) => {
    return {type: SET_PAGE_CURRENT, currentPage}
}

export const totalUsersSet = (totalUsers) => {
    return {type: SET_TOTAL_USERS, count:totalUsers}
}




export default userReducer;
