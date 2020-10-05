import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = (props) => {
    let messagesElements = props.messagePage.messages.map(message => <Message dialog={message.message}/>);

    let NewMessageElement = React.createRef();

    let AddPost = () => {
        props.addMessage();
        props.updateNewMessageText('');
    }

    let onMessageChange = () => {
        let text = NewMessageElement.current.value;
        props.updateNewMessageText(text);
    }
    return (
        <div>
            {messagesElements}
            <div className={s.message_change_block}>
                <div>
                    <textarea onChange={onMessageChange} ref={NewMessageElement} value={props.messagePage.newMessageText}/>
                </div>
                <div className={s.item_button}>
                    <button onClick={AddPost}>Отправить</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;