import React from 'react';
import s from './User.module.css';
import basePhoto from '../../assets/base.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../API/api";

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
                        (u.followed) ? < button disabled={props.followingInProgress} onClick={() => {
                            debugger
                            props.toggleFollowingInProgress(true);
                                usersAPI.followUsers(u.id)
                                    .then(data => {
                                        if (data !== null) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false);
                                    })
                            }}> FOLLOW </button>

                            : <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleFollowingInProgress(true);
                                usersAPI.unfollowUsers(u.id)
                                    .then(data => {
                                        if (data !== null) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false);
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