import React from 'react';
import key from './Header.module.css';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return <header className={key.header}>
        <img
            src='https://icons-for-free.com/iconfiles/png/512/mario+mario+bros+mario+world+mushroom+toad+videogame+icon-1320196400529338074.png'/>
        <div className={s.loginblock}>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    </header>
}

export default Header;