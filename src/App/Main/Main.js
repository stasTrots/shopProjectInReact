import React from 'react'
import ProductList from './Products/ProductList'
import { Route } from 'react-router-dom'
import CartPage from './CartPage/CartPage'
import PaymPage from './PaymentPage/PaymPage'
import ShipPage from './ShipPage/ShipPage'
import { Testimonials } from '../../Components/Testimonials/Testimonials'


const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart
}) => {
    return (
        <main className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                filter
                            </div>
                            <div className="col-lg-9">
                                {/* <ProductList addProductToCart={addProductToCart}
                                /> */}
                                <Route path="/" exact render={() => <ProductList
                                 addProductToCart={addProductToCart} /> } />
                                <Route path="/cart" exact render={() => <CartPage
                                 productsInCart={productsInCart} 
                                 removeProductFromCart={removeProductFromCart}/> }/>
                                <Route path="/paym" exact component={PaymPage}/>
                                <Route path="/ship" exact component={ShipPage}/>
                                <Route path="/" exact component={Testimonials}/>
                            </div>
                        </div>
                    </div>
                </main>
    )
}

export default Main