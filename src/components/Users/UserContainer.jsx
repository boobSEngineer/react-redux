import React from 'react';
import {connect} from "react-redux";
import User from "./User";
import {followCreate, unfollowCreate, userSetCreate} from "../../redux/user-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.userPage.users
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
        }
    }
};

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);