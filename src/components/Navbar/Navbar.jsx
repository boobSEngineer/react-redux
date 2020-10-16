import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import NavDialog from "./NavDialog/NavDialog";

const Navbar = (props) => {
    let usersDialogsElements = props.navbarPage.usersDialogs.map(user => <NavDialog id={user.id}
                                                                                                name={user.name}/>)

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}> Profile </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.active}> Messages </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/friends' activeClassName={s.active}> Friends </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active}> Music </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.active}> Settings </NavLink>
        </div>
        <div className={s.block_change}>
            <h3> В сети </h3>
            <div><b>Личные сообщения</b></div>
            <div className={s.user_elements}>{usersDialogsElements}</div>
        </div>
    </nav>
}

export default Navbar;