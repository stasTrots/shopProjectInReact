import React from 'react'
import ProductList from './Products/ProductList'
import { Route } from 'react-router-dom'
import CartPage from './CartPage/CartPage'


const Main = ({
    addProductToCart
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
                                <Route path="/" exact component={ProductList} />
                                <Route path="/cart" component={CartPage}/>
                            </div>
                        </div>
                    </div>
                </main>
    )
}

export default Main