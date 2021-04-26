import React from 'react'
import {keys} from 'lodash'
import products,{ getProductsObject } from '../../App/Main/Products/Products'
import './Cart.css'

const CartTotal = ({
    productsInCart,
    productsObject=getProductsObject(products)
}) => {
    return (
        <div className="cart-total">
            Total: {
                keys(productsInCart).reduce((total,id) => (
                    total + (productsInCart[id] * productsObject[id].price)
                ),0)
            } $
        </div>
    )
}

export default CartTotal
