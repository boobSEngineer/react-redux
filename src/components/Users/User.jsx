import React from 'react';
import s from './User.module.css';
import basePhoto from '../../assets/base.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let User = (props) => {
    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span onClick={() => {
                        props.pageChanged(p)
                    }} className={props.currentPage === p ? s.selectedPage : null}>{p}</span>
                })
            }

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : basePhoto} className={s.photo_groups}/>
                        </NavLink>
                    </div>
                    <div>
                        <div> {u.name} </div>
                        <div> {u.status} </div>
                    </div>
                    <div>
                        {/*<div> {u.location.cityName} </div>*/}
                        {/*<div> {u.location.countries} </div>*/}
                    </div>
                    <div>{
                        (u.followed) ?
                            < button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY' : '9d32f4fb-fcf3-42d4-be3c-2a1143e49722'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }}> FOLLOW </button>

                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{ }, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY' : '9d32f4fb-fcf3-42d4-be3c-2a1143e49722'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }}> UNFOLLOW </button>
                    }
                    </div>
                </span>
            </div>)
        }
    </div>
};

export default User;