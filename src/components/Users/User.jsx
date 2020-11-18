import React from "react";
import s from './User.module.css';
import * as axios from 'axios';
import basePhoto from '../../assets/base.png'

class User extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.userSet(response.data.items);
                this.props.totalUsersSet(response.data.totalCount);
            })
    }

    pageChanged = (page) => {
        this.props.setCurrentPageCreate(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.userSet(response.data.items);
                this.props.totalUsersSet(response.data.totalCount);

            })
    }

    render() {
        let pages = [];
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {
                    pages.map(p => {
                        return <span onClick={ () => {this.pageChanged(p)} } className={this.props.currentPage === p ?s.selectedPage :null}>{p}</span>
                    })
                }

            </div>
            {
                this.props.users.map(u => <div key={u.id}>
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
                                ? < button onClick={() => {this.props.unfollow(u.id)}}> FOLLOW </button>
                                : <button onClick={() => {this.props.follow(u.id)}}> UNFOLLOW </button>
                        }
                        </div>
                    </span>
                </div>)
            }
        </div>
    }
}

export default User;