import React from 'react';
import {addPostCreate, updateNewPostTextCreate} from '../../../redux/profille-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        postElements: state.profilePage.postElements,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostText: updateNewPostTextCreate,
    addPost: addPostCreate
})
(MyPosts);

export default MyPostsContainer;


// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText: (text) => {
//             dispatch(updateNewPostTextCreate(text));
//         },
//         addPost: () => {
//             dispatch(addPostCreate());
//         }
//     }
// }