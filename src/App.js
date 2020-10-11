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
    debugger
    return (
        <div className='wrapper'>
            <Header/>
            <Groups/>
            <Navbar navbarPage={props.store.GetState().navbarPage}
                store={props.store}
                    dispatch={props.dispatch}/>
            <div className='wrapper_content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs
                        messagePage={props.store.GetState().messagePage}
                        store={props.store}
                        dispatch={props.dispatch}/>}/>
                <Route path='/profile' render={() =>
                    <Profile
                        profilePage={props.store.GetState().profilePage}
                        store={props.store}
                        dispatch={props.dispatch}/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
