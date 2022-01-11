import React from 'react';
import moduleCSS from './Cart.module.scss';
import imgCart from '../../../icon-cart.svg';

const Cart =()=> {
    return (
        <div className={moduleCSS.cart}>
            <div className={moduleCSS.iconCart}>
                <img src={imgCart} className='img-fluid'  alt="cart"/>
                <div className={moduleCSS.cart__productCounter}>
                     3
                </div>
            </div>
            <div className={moduleCSS.cartInfo}>
                <ol className={moduleCSS.cart__productList}>
                    <li className={moduleCSS.productItem}>
                    <div className={moduleCSS.productName}>
                        Бургер
                    </div>  
                    <div className={moduleCSS.productPrice}>
                        цена <strike> 50грн </strike>45грн 
                    </div>       
                    </li> 
                    <li className={moduleCSS.productItem}>
                    <div className={moduleCSS.productName}>
                        Бургер
                    </div>  
                    <div className={moduleCSS.productPrice}>
                        цена <strike> 50грн </strike>45грн 
                    </div>       
                    </li> 
                    <li className={moduleCSS.productItem}>
                    <div className={moduleCSS.productName}>
                        Бургер
                    </div>  
                    <div className={moduleCSS.productPrice}>
                        цена <strike> 50грн </strike>45грн 
                    </div>       
                    </li> 
                </ol>

                <div className={moduleCSS.cart__allPrice}>
                    <strike>500грн</strike>450грн
                </div>
            </div>
        </div>
    )
}



export default Cart;