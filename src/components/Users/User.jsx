import React from "react";
import s from './User.module.css';
import * as axios from 'axios';
import basePhoto from '../../assets/base.png'

class User extends React.Component {
    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.userSet(response.data.items);
            })
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <img src={u.photos.small != null ? u.photos.small : basePhoto} className={s.photo_groups}/>
                    <div>
                        <div> {u.fullName} </div>
                        <div> {u.status} </div>
                    </div>
                    <div>
                        {/*<div> {u.location.cityName} </div>*/}
                        {/*<div> {u.location.countries} </div>*/}
                    </div>
                    <div>{
                        (u.followed)
                            ? < button onClick={() => {
                                this.props.unfollow(u.id)
                            }}> FOLLOW </button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}> UNFOLLOW </button>
                    }
                    </div>
                </span>
                </div>)
            }
        </div>
    }
}

export default User;