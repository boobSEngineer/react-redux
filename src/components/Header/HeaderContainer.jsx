import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import { authUserThunkCreate} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authUser();
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

export default connect(MapStateToProps, {authUser: authUserThunkCreate})(HeaderContainer);