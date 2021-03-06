import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import {connect} from 'react-redux'

const Cart = ({
    productsInCart,
}) => {
    return (
        <div className="cart text-center">
            <CartProductList
                productsInCart={productsInCart}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
            <Link to="/cart" className="cart-link">Show cart</Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart:state.productsInCart
})

export default connect(
    mapStateToProps
)(Cart)

