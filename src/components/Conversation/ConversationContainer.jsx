import React from 'react';
import Conversation from "./Conversation";
import {connect} from "react-redux";
import {conversationSetCreate, followCreate, unfollowCreate} from "../../redux/conversation-reducer";


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

const ConversationContainer = connect(mapStateToProps, mapDispatchToProps)(Conversation);

export default ConversationContainer;