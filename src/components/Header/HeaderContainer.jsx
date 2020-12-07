import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import Header from "./Header";
import {authUserCreate} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                debugger;
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

// let MapStateToProps = (state) => {
//     return {
//     }
// }

export default connect()(HeaderContainer);