import React from 'react'

import './ProductListItem.css'


const user = {
    name:"Ivan",
    age:20
}

const {
    name,
    age
} = user

console.log(name)




const ProductListItem = (props) => {
    console.log(props)
    return (
        <div className="product-list-item">
            <div className="product-title">{props.name}</div>
            <div className="product-description">This is : {props.name}</div>
            <div className="product-features">Type: {props.type}</div>
            <div className="product-features">Capacity: {props.capacity}</div>
            <div className="product-price">$ {props.price}</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

export default ProductListItem