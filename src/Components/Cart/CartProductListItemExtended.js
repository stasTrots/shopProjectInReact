import React from 'react'
import Quantity from '../Quantity/Quantity'
import './CartProductListItemExtended.css'
import {connect} from 'react-redux'


const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductCount,
    isLiked
}) => {
    console.log(isLiked)
    return(
    <div className="cart-product-list-item-description">
        <div className="row">
            <div className="col-lg-3">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="col-lg-9">
                <p className="cart-extended-name">
                    <span> {product.name} </span> 
                </p>
                <button className="isLiked">
                    {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                </button>
                <p className="cart-extended-price">
                        Price for one item: <span className="bold">$ {product.price} </span> 
                </p>
                <p className="cart-extended-count">
                        Selected quantity: <span className="bold"> {productCount} </span> 
                </p>
                <Quantity
                productCount={productCount}
                onIncrementClick={() => changeProductCount(product.id,productCount+1)}
                onDecrementClick={() => changeProductCount(product.id,productCount-1)}/>  
                
                <p className="cart-extended-sum">
                        Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span> 
                </p>
                <button onClick={() => removeProductFromCart(product.id)}>Remove Product</button>
            </div>
        </div>
    </div>
    
)}

const mapState = (state,props) => ({
    isLiked:state.productsLike[props.product.id]
})
const mapDispatch = (dispatch) => ({
    removeProductFromCart:(id) => dispatch({
        type:"REMOVE_PRODUCT_FROM_CART",
        id
    }),
    changeProductCount:(id,count) => dispatch({
        type:"CHANGE_PRODUCT_QUANTITY",
        id,
        count
    })
})
export default connect(
    mapState,
    mapDispatch
)(CartProductListItemExtended)

