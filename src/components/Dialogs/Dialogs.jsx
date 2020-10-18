import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = (props) => {
    let messagesElements = props.messages.map(message => <Message dialog={message.message}/>);

    let addMessage = () => {
        props.addMessage();
        props.updateNewMessageText('');
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    }
    return (
        <div>
            {messagesElements}
            <div className={s.message_change_block}>
                <div>
                    <textarea onChange={onMessageChange}
                              value={props.newMessageText}/>
                </div>
                <div className={s.item_button}>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;