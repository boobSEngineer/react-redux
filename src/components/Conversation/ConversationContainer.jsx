import React from 'react';
import Conversation from "./Conversation";
import {connect} from "react-redux";
import {conversationSetCreate, followCreate, unfollowCreate} from "../../redux/conversation-reducer";
import {compose} from "redux";


const mapStateToProps = (state) => {

    return {
        conversation: state.conversationPage.conversation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (conversationId) => {
            dispatch(followCreate(conversationId));
        },
        unfollow: (conversationId) => {
            dispatch(unfollowCreate(conversationId));
        },
        conversationSet: (conversations) => {
            dispatch(conversationSetCreate(conversations));
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Conversation);
