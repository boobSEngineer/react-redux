import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Groups from './components/Groups/Groups.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className='wrapper'>
            <Header/>
            <Groups/>
            <Navbar state={props.state.navbarPage}/>
            <div className='wrapper_content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs messagePage={props.state.messagePage}
                             addMessage={props.addMessage}
                             updateNewMessageText={props.updateNewMessageText}/>}/>
                <Route path='/profile' render={() =>
                    <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
