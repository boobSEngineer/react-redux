import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreate} from "../../redux/profille-reducer";
import {Redirect, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps, {getProfile: getProfileThunkCreate}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);
