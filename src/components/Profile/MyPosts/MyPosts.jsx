import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostCreate, updateNewPostTextCreate} from "../../../redux/state";


const MyPosts = (props) => {
    let postsElements = props.profilePage.postElements.map(post => <Post message={post.message}
                                                                         likeCounter={post.likesCounter}/>)

    let NewPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostCreate());
        props.dispatch(updateNewPostTextCreate(''));
    }

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        props.dispatch(updateNewPostTextCreate(text));
    }
    return (
        <div className={s.change_block}>
            <div>
                <h3> My posts </h3>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={NewPostElement}
                          value={props.profilePage.newPostText}/>
            </div>
            <button onClick={addPost}> Send</button>
            <div className={s.change_block_message}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;