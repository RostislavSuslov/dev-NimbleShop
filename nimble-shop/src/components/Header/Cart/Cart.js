import React from 'react';
import moduleCSS from './Cart.module.scss';
import imgCart from '../../../icon-cart.svg';
import ProductInCart from './productInCart/ProductInCart.js'
import {cartС} from './../../../data/carts.js';





const Cart = () => {
     const COUNTING_ARR = [];
    cartС.map(num => COUNTING_ARR.push(num.count))
    console.log(COUNTING_ARR)
    return (
        <div className={moduleCSS.cart}>
            <div className={moduleCSS.iconCart}>
                <img src={imgCart} className="img-fluid" alt="user"/>
                <div className={moduleCSS.cart__productCounter}>
                    { COUNTING_ARR.reduce((sum, current)=> {
                            return sum + current
                    }, 0)}
                </div>
            </div>
            <div className={moduleCSS.cartInfo}>
                {/*<ol className={moduleCSS.cart__productList}>*/}
                {/*    {cartС.map(item => <ProductInCart item={item}/>)}*/}
                {/*</ol>*/}

                <ol className={moduleCSS.cart__productList}>

                </ol>

                 <div className={moduleCSS.cart__allPrice}>
                     <strike>500грн</strike>450грн
                 </div>
            </div>
        </div>
    )
}


export default Cart;