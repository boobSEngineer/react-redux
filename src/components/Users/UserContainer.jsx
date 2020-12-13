import React from 'react';
import {connect} from 'react-redux';
import User from './User';
import {
    followCreate,
    setCurrentPageCreate, toggleFollowingInProgressCreate, toggleIsFetchingCreate,
    totalUsersSetCrate,
    unfollowCreate,
    userSetCreate
} from '../../redux/user-reducer';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../API/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.userSet(data.items);
                this.props.totalUsersSet(data.totalCount);
            })
    }

    pageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.currentPageSet(page);
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.userSet(data.items);
                this.props.totalUsersSet(data.totalCount);

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
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress

    }
};

export const UserContainer = connect(mapStateToProps,
    {
        follow: followCreate,
        unfollow: unfollowCreate,
        userSet: userSetCreate,
        currentPageSet: setCurrentPageCreate,
        totalUsersSet: totalUsersSetCrate,
        toggleIsFetching: toggleIsFetchingCreate,
        toggleFollowingInProgress: toggleFollowingInProgressCreate
    }
)(UsersContainer);