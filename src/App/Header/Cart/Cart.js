import React from 'react'
import {keys} from "lodash"
import './cart.css'
import products from '../../Main/Products/Products'


const Cart = ({productsInCart}) => {
    console.log(products)
    console.log(productsInCart)
    return (
        <div className="cart text-center">
            {
                keys(productsInCart).map(id => (
                    <div key={id}>{products[id-1].name} : {productsInCart[id]}</div>
                ))
            }
        </div>
    )
}

export default Cart