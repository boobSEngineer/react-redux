import React from "react";
import s from './User.module.css'

const User = (props) => {
    if (props.users.length == 0) {
        props.userSet([
                {
                    id: 1,
                    img: 'https://sun9-38.userapi.com/impf/c857732/v857732064/8e3f8/LZMgRyX4ORU.jpg?size=800x800&quality=96&proxy=1&sign=d83d9b5837db5bec7b76f5052cfa2080',
                    followed: false,
                    fullName: 'Marta',
                    status: 'react-redux',
                    location: [{cityName: 'Minsk'}, {countries: 'Belarus'}]
                },
                {
                    id: 2,
                    img: 'https://sun9-28.userapi.com/impg/xBhsXoJWKf7P_NY7VIZsx5ryoMD10hfO0dDPdw/Qhu7WoO4TEk.jpg?size=1280x1280&quality=96&proxy=1&sign=2224c6864e67e7a0621f1919ae39362a',
                    followed: false,
                    fullName: 'Sasha',
                    status: 'my sweet home',
                    location: [{cityName: 'Moscow'}, {countries: 'Russia'}]
                },
                {
                    id: 3,
                    img: 'https://sun9-74.userapi.com/impf/c851336/v851336267/cef87/WMAK0zp4MQ0.jpg?size=983x926&quality=96&proxy=1&sign=c92094e1c796e287cd2d7982bf0192dc',
                    followed: true,
                    fullName: 'lola',
                    status: 'wowwowoowo',
                    location: [{cityName: 'Tokio'}, {countries: 'japan'}]
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <img src={u.img} className={s.photo_groups}/>
                    <div>
                        <div> {u.fullName} </div>
                        <div> {u.status} </div>
                    </div>
                    <div>
                        <div> {u.location.cityName} </div>
                        <div> {u.location.countries} </div>
                    </div>
                    <div>{
                        (u.followed)
                        ?< button onClick={ () => {props.unfollow(u.id)} }> FOLLOW </button>
                        :<button onClick={ () => {props.follow(u.id)} }> UNFOLLOW </button>
                    }
                    </div>
                </span>
            </div>)
        }
    </div>
}
export default User;