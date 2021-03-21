import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'


// const user = {
//     name:"Ivan",
//     age:20
// }

// const {
//     name,
//     age
// } = user

// console.log(name)




const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image
}) => {

    const [count, setCount] = useState(1);

    return (
        <div className="product-list-item">
            <div className="product-img">
                <img src={image} alt=""/>
            </div>
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity}</div>
            <div className="product-quantity">
                <button className="decrement-button"
                onClick={() => setCount(count-1)}>-</button>
                <input type="text" value={count} readOnly/>
                <button className="increment-button"
                onClick={() => setCount(count+1)}>+</button>
            </div>
            <div className="product-price">$ {price}</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string
}
ProductListItem.defaultProps = {
    description:"No description....",
    image:"images/unnamed.png"
}

export default ProductListItem