import React from 'react';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://www.ixbt.com/img/n1/news/2020/6/1/SI_3DSVC_SuperMarioBros_image1280w_large.jpg'/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
            <div>
                {props.profile.fullName}
            </div>
            <div>
                GitHub: {props.profile.contacts.github}
            </div>
        </div>
    )
}

export default ProfileInfo;