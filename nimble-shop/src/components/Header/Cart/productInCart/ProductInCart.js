import React from 'react';
import moduleCSS from './ProductInCart.module.scss';
import {products} from './../../../../data/products'
import {productInCartArray} from './../../../../tools/productInCartArray'

const ALL_PRICE = [];

const ProductInCart = ({item}) => {

    const getProductInCartId = [item].map(id => id.product_id)

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

    const salesPercent = (price, discount) => (price * discount) / 100;

    const findProductsById = getProductsByIds(getProductInCartId)

    console.log(findProductsById)
    // const creatProductInCartArray =(arr)=> arr.map(e => productInCartArray.push(e.price))
    //
    // creatProductInCartArray(findProductsById)
    //
    //
    // console.log(productInCartArray)
    return (
        <li>
            {findProductsById.map(key => key.name)} —
            <strike>
                {findProductsById.map(product => product.hasOwnProperty("discount")
                    ? product.price
                    : null
                )}
            </strike>
            <span>
                {findProductsById.map(product => product.hasOwnProperty("discount")
                    ? product.price - salesPercent(product.price, product.discount)

                    : product.price
                )}
            </span>


            &nbsp;- {item.count}шт.

        </li>
    )
}

export default ProductInCart;