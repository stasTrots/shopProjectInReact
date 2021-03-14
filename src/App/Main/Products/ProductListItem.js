import React from 'react'
import ProductList from './ProductList'
import './ProductListItem.css'

const ProductListItem = () => {
    return (
        <div className="product-list-item">
            <div className="product-title">iPhone X</div>
            <div className="product-description">This is iPhone X</div>
            <div className="product-features">Type: phone</div>
            <div className="product-features">Capacity: 64Gb</div>
            <div className="product-price">$ 800</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

export default ProductListItem