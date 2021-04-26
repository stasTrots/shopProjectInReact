import React from 'react'
import ProductList from './Products/ProductList'
import { Route } from 'react-router-dom'
import CartPage from './CartPage/CartPage'
import PaymPage from './PaymentPage/PaymPage'
import ShipPage from './ShipPage/ShipPage'
import { Testimonials } from '../../Components/Testimonials/Testimonials'
import CheckoutPage from './CheckoutPage/CheckoutPage'
import {Filter} from './Filter/Filter'

const Main = () => {
    return (
        <main className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <Route path="/" exact component={Filter}/>  
                            </div>
                            <div className="col-lg-9">
                                <Route path="/" exact component={ProductList} />
                                <Route path="/cart" exact component={CartPage}/>
                                <Route path="/paym" exact component={PaymPage}/>
                                <Route path="/ship" exact component={ShipPage}/>
                                <Route path="/" exact component={Testimonials}/>
                                <Route path="/checkout" exact component={CheckoutPage}/>
                            </div>
                        </div>
                    </div>
                </main>
    )
}

export default Main