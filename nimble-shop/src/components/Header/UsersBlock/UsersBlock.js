import React from 'react';
import moduleCSS from './UsersBlock.module.scss';
 
const UsersBlock =()=> {
    return (
        <div className={`${moduleCSS.usersBlock}` + ' container'}>
            users-block
        </div>
    )
}

export default UsersBlock;