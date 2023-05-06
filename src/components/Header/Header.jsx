import React from "react";
import HeaderModule from './Header.module.css';


const Header = (props) => {
    return(
        <header className={HeaderModule.header}>
            <img src="https://e7.pngegg.com/pngimages/394/397/png-clipart-star-wars-the-old-republic-galactic-republic-jedi-logo-emblem-emblem-monochrome.png" />
        </header>
    );
}

export default Header;