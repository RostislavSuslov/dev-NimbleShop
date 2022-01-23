import React from "react";
import moduleCSS from "./UserProductsNames.module.scss";

const UserProductsNames = ({product}) => {
    return (
        <div className={moduleCSS.userData__productName}>
            {product.name}
        </div>
    )
}
export default UserProductsNames;
