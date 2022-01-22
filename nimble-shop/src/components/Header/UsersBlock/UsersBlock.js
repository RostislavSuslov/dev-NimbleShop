import React from 'react';
import moduleCSS from './UsersBlock.module.scss';


const UsersBlock = () => {
    return (
        <div className={moduleCSS.usersBlock}>
            <div className={moduleCSS.userAvatar}>Р</div>
            <div className={moduleCSS.userInfo}>
                <div className={moduleCSS.userName}>
                    Суслов Ростислав
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