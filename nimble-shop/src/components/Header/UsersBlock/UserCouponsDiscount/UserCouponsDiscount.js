import React from "react";
import moduleCSS from "./UserCouponsDiscount.module.scss";

const UserCouponsDiscount = ({attr}) => {
    return (
        <div className={moduleCSS.couponDiscount}>
            {attr.discount} %
        </div>
    )
}

export default UserCouponsDiscount;
