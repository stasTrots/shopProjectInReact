import React from 'react'
import products from '../../Main/Products/Products'
import {keys} from "lodash"

const productObject = products.reduce((obj,product) => ({
    ...obj,
    [product.id]:product
}),{})

const CartPage = ({productsInCart}) => {
    return (
        <>
            <h1 className="page-title">Cart page this is lipova dolyna</h1>

            <div >
            {
                keys(productsInCart).map(id => (
                    <div key={id}>{productObject[id].name} : Coun - {productsInCart[id]} : Price 1 - {productObject[id].price}</div>
                ))
            }
            <div>
            Total: {
                keys(productsInCart).reduce((sum, id ) => {
                    return sum + (productsInCart[id] * productObject[id].price);
                }, 0)
            } $
            </div>
            </div>
        </>
    )
}

export default CartPage