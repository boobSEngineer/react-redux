import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {addMessageCreate, updateNewMessageTextCreate} from "../../redux/message-reducer";

const Dialogs = (props) => {
    let messagesElements = props.messagePage.messages.map(message => <Message dialog={message.message}/>);

    let addMessage = () => {
        props.dispatch(addMessageCreate());
        props.dispatch(updateNewMessageTextCreate(''));
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextCreate(text));
    }
    return (
        <div>
            {messagesElements}
            <div className={s.message_change_block}>
                <div>
                    <textarea onChange={onMessageChange}
                              value={props.messagePage.newMessageText}/>
                </div>
                <div className={s.item_button}>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;