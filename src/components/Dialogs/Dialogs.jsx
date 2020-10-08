import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = (props) => {
    let messagesElements = props.messagePage.messages.map(message => <Message dialog={message.message}/>);

    let NewMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'})
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: ''})
    }

    let onMessageChange = () => {
        let text = NewMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text})
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