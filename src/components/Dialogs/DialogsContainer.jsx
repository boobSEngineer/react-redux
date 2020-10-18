import React from 'react';
import {addMessageCreate, updateNewMessageTextCreate} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import storeContext from "../../test-context";

const DialogsContainer = (props) => {
   /* let state = props.store.getState();

    let onAddMessage = () => {
        props.store.dispatch(addMessageCreate());
        props.store.dispatch(updateNewMessageTextCreate(''));
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextCreate(text));
    }*/

    return <storeContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                let onAddMessage = () => {
                    store.dispatch(addMessageCreate());
                    store.dispatch(updateNewMessageTextCreate(''));
                }

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextCreate(text));
                }

                return (<Dialogs updateNewMessageText={onMessageChange} addMessage={onAddMessage}
                                messages={state.messagePage.messages}
                                newMessageText={state.messagePage.newMessageText}/>)
            }
        }
    </storeContext.Consumer>
}
export default DialogsContainer;