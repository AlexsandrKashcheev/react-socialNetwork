import React from "react";
import NavModule from './Navbar.module.css';

const Navbar = (props) => {
    return(
        <nav className={NavModule.nav}>
            <div className={NavModule.item}>
                <a className={NavModule.item} href="/profile">
                    Profile
                </a>
            </div>
            <div className={NavModule.item}>
                <a className={NavModule.item} href="/dialogs">
                    Messages
                </a>
            </div>
            <div className={NavModule.item}>
                <a className={NavModule.item} href="/news">
                    News
                </a>
            </div>
            <div className={NavModule.item}>
                <a className={NavModule.item} href="/music">
                    Music
                </a>
            </div>
            <div className={NavModule.item}>
                <a className={NavModule.item} href="#">
                    Settings
                </a>
            </div>
        </nav>
    );
}

export default Navbar;