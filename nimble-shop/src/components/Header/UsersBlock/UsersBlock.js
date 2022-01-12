import React from 'react';
import moduleCSS from './UsersBlock.module.scss';
import imgUser from '../../../icon-user.svg';

const UsersBlock = () => {
    return (
        <div className={moduleCSS.usersBlock}>
            <img src={imgUser} className={moduleCSS.iconUser} alt="user"/>
        </div>
    )
}

export default UsersBlock;