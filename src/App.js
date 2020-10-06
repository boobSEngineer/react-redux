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
            <Navbar store={props.store}/>
            <div className='wrapper_content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs
                        store={props.store}/>}/>
                <Route path='/profile' render={() =>
                    <Profile
                        store={props.store}/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
