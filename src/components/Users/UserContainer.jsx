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
import

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.userSet(response.data.items);
                this.props.totalUsersSet(response.data.totalCount);
            })
    }

    pageChanged = (page) => {
        this.props.currentPageSet(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.userSet(response.data.items);
                this.props.totalUsersSet(response.data.totalCount);

            })
    }

    render() {
        return <>
            <div>
                <img src={}/>
            </div>
            <User
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                pageChanged={this.pageChanged}
            />
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

        currentPageSet: (currentPage) => {
            dispatch(setCurrentPageCreate(currentPage))
        },

        totalUsersSet: (totalUsers) => {
            dispatch(totalUsersSetCrate(totalUsers))
        },
        isFetching: (isFetching) => {
            dispatch(toggleIsFetchingCreate(isFetching))
        }

    }
};

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);