import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts store={props.store}
                     dispatch={props.dispatch}
                     profilePage={props.profilePage}/>
        </div>
    )
}

export default Profile;