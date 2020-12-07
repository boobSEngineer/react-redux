import React from 'react';
import {connect} from 'react-redux';
import User from './User';
import {
    followCreate,
    setCurrentPageCreate, toggleIsFetchingCreate,
    totalUsersSetCrate,
    unfollowCreate,
    userSetCreate
} from '../../redux/user-reducer';
import * as axios from 'axios';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.userSet(response.data.items);
                this.props.totalUsersSet(response.data.totalCount);
            })
    }

    pageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.currentPageSet(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.userSet(response.data.items);
                this.props.totalUsersSet(response.data.totalCount);

            })
    }

    render() {
        return <>
            <User
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.isFetching ? [] : this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                pageChanged={this.pageChanged}
            />
            {this.props.isFetching ? <Preloader/> : null}
        </>
    };

}

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        totalUsersCount: state.userPage.totalUsersCount,
        pageSize: state.userPage.pageSize,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followCreate(userId));
//         },
//
//         unfollow: (userId) => {
//             dispatch(unfollowCreate(userId))
//         },
//
//         userSet: (users) => {
//             dispatch(userSetCreate(users));
//         },
//
//         currentPageSet: (currentPage) => {
//             dispatch(setCurrentPageCreate(currentPage))
//         },
//
//         totalUsersSet: (totalUsers) => {
//             dispatch(totalUsersSetCrate(totalUsers))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingCreate(isFetching))
//         }
//
//     }
// };

export const UserContainer = connect(mapStateToProps,
    {
        follow: followCreate,
        unfollow: unfollowCreate,
        userSet: userSetCreate,
        currentPageSet: setCurrentPageCreate,
        totalUsersSet: totalUsersSetCrate,
        toggleIsFetching: toggleIsFetchingCreate,
    }
)(UsersContainer);