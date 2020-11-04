import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Music from "./components/Music/Music";
import Friends from "./components/Users/Friends/Friends";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ConversationContainer from "./components/Conversation/ConversationContainer";
import {UserContainer} from "./components/Users/UserContainer";

const App = (props) => {
    return (
        <div className='wrapper'>
            <Header/>
            <NavbarContainer/>
            <div className='wrapper_content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
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
