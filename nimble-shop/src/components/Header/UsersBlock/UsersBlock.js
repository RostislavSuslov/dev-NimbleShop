import React from 'react';
import moduleCSS from './UsersBlock.module.scss';
import {userB} from './../../../data/users.js';

import UserProductsNames from "./UserProductsNames/UserProductsNames.js";
import UserCouponsDiscount from "./UserCouponsDiscount/UserCouponsDiscount.js";

import {products} from "../../../data/products";

const UsersBlock = () => {
    const getUserCouponsId = userB.coupons.map(id => id.product_id)
    const getUserDiscount = userB.coupons.map(discount => discount.discount)

    console.log(getUserCouponsId);
    const getProductsByIds = (arrayId) => {
        return products.filter(item => {
            return arrayId.includes(item.id)
        })
    }

    const getProductById = (id) => {
        return products.find((item) => {
            console.log('find')
            return item.id === id
        })
    }

    const findProductsById = getProductsByIds(getUserCouponsId)
    console.log(findProductsById)

    return (
        <div className={moduleCSS.usersBlock}>
            <div className={moduleCSS.userAvatar}> {userB.name.substr(0, 1).toUpperCase()}</div>
            <div className={moduleCSS.userInfo}>
                <div className={moduleCSS.userName}>
                    {userB.name}
                </div>
                <div className={moduleCSS.userCoupons}>
                    <div className={moduleCSS.userData}>
                        {userB.hasOwnProperty("coupons") ? findProductsById.map(i => <UserProductsNames key={i.id} product={i}/>) : 'У вас нет купонов'}
                    </div>
                    <div className={moduleCSS.userData__salesValue}>
                        {userB.coupons.map(attr => <UserCouponsDiscount attr={attr}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersBlock;