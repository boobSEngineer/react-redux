import React from 'react';
import s from './User.module.css';
import basePhoto from '../../assets/base.png';

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
                    return <span onClick={() => {props.pageChanged(p)}} className={props.currentPage === p ? s.selectedPage : null}>{p}</span>
                })
            }

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <img src={u.photos.small != null ? u.photos.small : basePhoto} className={s.photo_groups}/>
                    <div>
                        <div> {u.name} </div>
                        <div> {u.status} </div>
                    </div>
                    <div>
                        {/*<div> {u.location.cityName} </div>*/}
                        {/*<div> {u.location.countries} </div>*/}
                    </div>
                    <div>{
                        (u.followed)
                            ? < button onClick={() => {
                                props.unfollow(u.id)
                            }}> FOLLOW </button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}> UNFOLLOW </button>
                    }
                    </div>
                </span>
            </div>)
        }
    </div>
};

export default User;