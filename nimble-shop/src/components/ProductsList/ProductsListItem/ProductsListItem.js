import moduleCSS from './ProductsListItem.module.scss'

import {getCalculatedProcentDiscount} from "../../../tools/calculateProcent"

const ProductsListItem = ({product} ) => {

    const price = product.discount
        ? getCalculatedProcentDiscount(product.price, product.discount)
        : product.price

    return (
        <div className={moduleCSS.productsLayout + ' col-md-6'}>
            <div className={moduleCSS.productThumb}>
                <div className={moduleCSS.productThumb__img}>
                    <img src={product.src} className="img-fluid" alt=""/>
                </div>
                <div className={moduleCSS.productThumb__title}>
                    {product.name}
                </div>

                <div className={moduleCSS.productThumb__price}>
                    {price}
                    {product.discount ? <> (<strike>{product.price}</strike>) </> : null}
                    грн
                </div>
            </div>
        </div>
    )
}

export default ProductsListItem