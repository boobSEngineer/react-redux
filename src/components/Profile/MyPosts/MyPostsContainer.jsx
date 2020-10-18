import React from 'react';
import {addPostCreate, updateNewPostTextCreate} from "../../../redux/profille-reducer";
import MyPosts from "./MyPosts";
import storeContext from "../../../test-context";

const MyPostsContainer = (props) => {
    /*let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(addPostCreate());
        props.store.dispatch(updateNewPostTextCreate(''));
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextCreate(text));
    }*/
    return <storeContext.Consumer>{
        (store)=> {
            let state = store.getState();

            let onAddPost = () => {
                store.dispatch(addPostCreate());
                store.dispatch(updateNewPostTextCreate(''));
            }

            let onPostChange = (text) => {
                store.dispatch(updateNewPostTextCreate(text));
            }
            return (
                <MyPosts updateNewPostText={onPostChange} addPost={onAddPost}
                         postElements={state.profilePage.postElements}
                         newPostText={state.profilePage.newPostText}/>
            )
        }
    }
    </storeContext.Consumer>


}

export default MyPostsContainer;