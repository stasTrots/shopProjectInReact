import React, { Component } from 'react'
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


class ProductListItem extends Component {

    
    state = {
        
        productCount:1,
        
    }
    onIncrementClick() {
        this.setState((prevState) => ({
            productCount:prevState.productCount + 1
        }))
    }
    onDecrementClick() {
        this.setState((prevState) => ({
            productCount:prevState.productCount - 1
        }))
    }
    
    

    render() {

        const {
            
            name,
            description,
            type,
            capacity,
            price,
            image,
            addProductToCart

        } = this.props

        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt={name}/>
                </div>
                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}</div>
                <div className="product-quantity">
                    <button className="decrement-button" disabled={this.state.productCount <=1}
                    onClick={() => this.onDecrementClick()}>-</button>
                    <input type="text" value={this.state.productCount} readOnly/>
                    <button className="increment-button"
                    onClick={() => this.onIncrementClick()}>+</button>
                </div>
                <div className="product-price">$ {price}</div>
                <button className="btn-add-to-cart"
                onClick={() => addProductToCart(name,this.state.productCount)}>Add to cart</button>
            </div>
        )
    }
}

// const ProductListItem = ({
//     name,
//     description,
//     type,
//     capacity,
//     price,
//     image
// }) => {



    
// }

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