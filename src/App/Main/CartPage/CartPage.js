import React from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductCount
}) => {
    return (
        <>
            <h1 className="page-title">Cart</h1>
            <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
                removeProductFromCart={removeProductFromCart}
                changeProductCount={changeProductCount}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
            <Link to="/checkout" className="cartPage-link">Procced to checkout</Link>
        </>
    )  
}

const mapState = (state) => ({
    productsInCart:state.productsInCart
})
export default connect(
    mapState,
)(CartPage)

