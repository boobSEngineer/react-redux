import React from 'react';
import {addMessageCreate, updateNewMessageTextCreate} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        messages: state.messagePage.messages,
        newMessageText: state.messagePage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreate(text));
        },
        addMessage: () => {
            dispatch(addMessageCreate());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;