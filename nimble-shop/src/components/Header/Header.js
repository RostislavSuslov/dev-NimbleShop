import React from 'react';
import moduleCSS from './Header.module.scss';

import logo from '../../logo.svg';
const Header =()=> {
    return (
        <header className={moduleCSS.header}>
            <div className="img-box">
              <img src={logo} className={`${moduleCSS.siteLogo}`+ ' img-fluid'} alt="logo" />
            </div>
            <p>Это хеадер)</p>
        </header>
    )
}
 
export default Header;