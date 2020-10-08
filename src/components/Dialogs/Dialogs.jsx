import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {addMessageActionCreate, updateNewMessageTextActionCreate} from "../../redux/state";

const Dialogs = (props) => {
    let messagesElements = props.messagePage.messages.map(message => <Message dialog={message.message}/>);

    let NewMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreate());
        props.dispatch(updateNewMessageTextActionCreate(''));
    }

    let onMessageChange = () => {
        let text = NewMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreate(text));
    }
    return (
        <div>
            {messagesElements}
            <div className={s.message_change_block}>
                <div>
                    <textarea onChange={onMessageChange} ref={NewMessageElement}
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