import React from 'react';
import './App.css';
import Music from "./components/Music/Music";
import Friends from "./components/Users/Friends/Friends";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ConversationContainer from "./components/Conversation/ConversationContainer";
import UserContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/login"; //Пример export default (можем другое имя подставить, при импорте компоненты)

const App = (props) => {
    return (
        <div className='wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='wrapper_content'>
                <Route path='/login' render={() => <LoginPage/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/conversation' render={() => <ConversationContainer/>}/>
                <Route path='/users' render={() => <UserContainer/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
