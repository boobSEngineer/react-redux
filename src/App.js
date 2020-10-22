import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Groups from './components/Groups/Groups.jsx';
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = (props) => {
    return (
        <div className='wrapper'>
            <Header/>
            <Groups/>
            <NavbarContainer />
            <div className='wrapper_content'>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
            <Route path='/profile' render={() => <Profile />}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/friends' render={() => <Friends/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
    </div>
</div>
);
}

export default App;
