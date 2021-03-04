import React from 'react';
import {connect} from 'react-redux';
import User from './User';
import { followUsersThunkCreate, getUsersThunkCreate, setCurrentPageCreate,
    unfollowUsersThunkCreate
} from '../../redux/user-reducer';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    pageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}

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
        currentPageSet: setCurrentPageCreate,
        getUsers: getUsersThunkCreate,
        followUser: followUsersThunkCreate,
        unfollowUser: unfollowUsersThunkCreate,
    }
)(UsersContainer);