import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunkCreate,
    getUserStatusThunkCreate, updateUserStatusThunkCreate
} from "../../redux/profille-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13155;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (<Profile {...this.props} />)
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps,
        {   getProfile: getProfileThunkCreate,
            getStatus: getUserStatusThunkCreate,
            updateStatus:updateUserStatusThunkCreate}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);
