import React from 'react';
import NavDialog from "./NavDialog/NavDialog";
import Dialogs from "../Dialogs/Dialogs";
import Navbar from "./Navbar";
import storeContext from "./../../test-context";

const NavbarContainer = (props) => {
    //let state = props.store.getState();

    return <storeContext.Consumer>
    {
        (store) => {
            let state = store.getState();
            return <Navbar usersDialogs={state.navbarPage.usersDialogs}/>
        }
    }
    </storeContext.Consumer>
}

export default NavbarContainer;