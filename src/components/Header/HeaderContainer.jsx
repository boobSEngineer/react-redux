import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import Header from "./Header";
import {authUserCreate} from "../../redux/auth-reducer";
import {headerAPI} from "../../API/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        headerAPI.getLogin()
            .then(data => {
                if (data !== null) {
                    let {id, login, email} = data.data
                    this.props.authUser(id, login, email)
                }
            })

    }

    render() {
        return <Header {...this.props}/>
    }
}

let MapStateToProps = (state) => {
    return {
        login:state.auth.login,
        isAuth:state.auth.isAuth
    }
}

export default connect(MapStateToProps, {authUser: authUserCreate})(HeaderContainer);