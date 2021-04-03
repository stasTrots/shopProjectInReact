import React from 'react'
import {keys} from "lodash"
import './cart.css'
import products from '../../Main/Products/Products'

const productObject = products.reduce((obj,product) => ({
    ...obj,
    [product.id]:product
}),{})

console.log(productObject)
console.log(products)

const Cart = ({productsInCart}) => {
 
    return (
        <div className="cart text-center">
            {
                keys(productsInCart).map(id => (
                    <div key={id}>{productObject[id].name} : {productsInCart[id]}</div>
                ))
            }
        </div>
    )
}

export default Cart