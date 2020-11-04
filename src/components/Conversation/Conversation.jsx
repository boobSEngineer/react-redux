import React from "react";
import s from './Conversation.module.css';

const Conversation = (props) => {
    if (props.conversation.length == 0) {
        props.conversationSet([
                {
                    id: 1, img: 'https://sun9-10.userapi.com/c626719/v626719372/2e3ec/qc5V0PFoQxk.jpg',
                    followed: false, name: 'BLM', status: 'uuuuuuu', numbers: 30
                },
                {
                    id: 2, img: 'https://sun9-10.userapi.com/c626719/v626719372/2e3ec/qc5V0PFoQxk.jpg',
                    followed: false, name: 'Home', status: 'my sweet home', numbers: 55
                },
                {
                id: 3, img: 'https://sun9-10.userapi.com/c626719/v626719372/2e3ec/qc5V0PFoQxk.jpg',
                followed: true, name: 'Anime', status: 'wow', numbers: 1002
            }
            ]
        )
    }

    return <div>
        {
            props.conversation.map(c => <div key={c.id}>
                <span>
                    <img src={c.img} className={s.photo_groups}/>
                    <div>
                        <div> {c.name} </div>
                        <div> {c.status}</div>
                        <div> followers : {c.numbers} </div>
                    </div>
                    <div>
                        {c.followed
                            ? <button onClick={() => {
                                props.unfollow(c.id)
                            }}> FOLLOW </button>
                            : <button onClick={() => {
                                props.follow(c.id)
                            }}> UNFOLLOW</button>
                        }
                    </div>
                </span>

            </div>)
        }
    </div>
}

export default Conversation;