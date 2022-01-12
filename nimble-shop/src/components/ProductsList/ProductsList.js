import React from 'react';
import moduleCSS from './ProductsList.module.scss';
import {products} from '../../data/products.js';
import ProductsListItem from "./ProductsListItem/ProductsListItem";


const ProductsList = ( ) => {
    return (
        <div className="container">
            <div className={moduleCSS.productsList + ' row'}>
                   {products.map(i => <ProductsListItem key={i.id} product={i}/>)}
            </div>
        </div>
    )
}

 

 
export default ProductsList;