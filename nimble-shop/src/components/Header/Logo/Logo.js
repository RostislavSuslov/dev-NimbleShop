import React from 'react';
import moduleCSS from './Logo.module.scss';
import logo from '../../../logo.svg';

const Logo =()=> {
    return (
        <a href='#' className={moduleCSS.logo}>
            <div className="img-box">
                <img src={logo} className={`${moduleCSS.siteLogo}`+ ' img-fluid'} alt="logo" />
            </div>
            <p>NimbleShop:)</p>
        </a>
    )
}
export default Logo;