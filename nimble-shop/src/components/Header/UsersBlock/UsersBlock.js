import React from 'react';
import moduleCSS from './UsersBlock.module.scss';
import {userA} from './../../../data/users.js';


const UsersBlock = () => {
    return (
        <div className={moduleCSS.usersBlock}>
            <div className={moduleCSS.userAvatar}> {userA.name.substr(0, 1).toUpperCase()}</div>
            <div className={moduleCSS.userInfo}>
                <div className={moduleCSS.userName}>
                    {userA.name}
                </div>
                <div className={moduleCSS.userData}>
                    <div className={moduleCSS.userData__productName}>Дабл Чізбургер</div>
                    <div className={moduleCSS.userData__salesValue}>5%</div>
                </div>
            </div>
        </div>
    )
}

export default UsersBlock;