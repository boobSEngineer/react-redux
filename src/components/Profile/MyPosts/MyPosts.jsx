import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements = props.postElements.map(post => <Post message={post.message}
                                                                         likeCounter={post.likesCounter}/>)
    let NewPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.change_block}>
            <div>
                <h3> My posts </h3>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={NewPostElement}
                          value={props.newPostText}/>
            </div>
            <button onClick={addPost}> Send</button>
            <div className={s.change_block_message}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;