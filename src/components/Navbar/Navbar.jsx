import React from "react";
import NavModule from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav className={NavModule.nav}>
            <div className={NavModule.item}>
                <NavLink className={NavModule.item} to="/profile">
                    Profile
                </NavLink>
            </div>
            <div className={NavModule.item}>
                <NavLink className={NavModule.item} to="/dialogs">
                    Messages 
                </NavLink>
            </div>
            <div className={NavModule.item}>
                <NavLink className={NavModule.item} to="/news">
                    News
                </NavLink>
            </div>
            <div className={NavModule.item}>
                <NavLink className={NavModule.item} to="/music">
                    Music
                </NavLink>
            </div>
            <div className={NavModule.item}>
                <NavLink className={NavModule.item} to="#">
                    Settings
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;