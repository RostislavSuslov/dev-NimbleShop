import React from 'react';
import moduleCSS from './Header.module.scss';
import Logo from './Logo/Logo';
import UsersBlock from './UsersBlock/UsersBlock';
import Cart from './Cart/Cart';

const Header =()=> {
    return (
        <header className={moduleCSS.header}>
            <div className={`${moduleCSS.container}` + ' container'}>
                <Logo/>
                <UsersBlock/>  
                <Cart/>
            </div>
        </header>
    )
}
 
export default Header;