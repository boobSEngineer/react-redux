import React from 'react';
import {connect} from "react-redux";
import User from "./User";
import {
    followCreate, setCurrentPageCreate, totalUsersSet,
    unfollowCreate,
    userSetCreate
} from "../../redux/user-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        totalUsersCount: state.userPage.totalUsersCount,
        pageSize: state.userPage.pageSize,
        currentPage: state.userPage.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followCreate(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowCreate(userId))
        },

        userSet: (users) => {
            dispatch(userSetCreate(users));
        },

        setCurrentPageCreate: (currentPage) => {
            dispatch(setCurrentPageCreate(currentPage))
        },

        totalUsersSet: (totalUsers) => {
            dispatch(totalUsersSet(totalUsers))
        }

    }
};

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);