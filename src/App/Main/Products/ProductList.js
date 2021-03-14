import React from 'react'
import ProductListItem from "./ProductListItem"

const ProductList = () => {
    return (
        <>
            <h1 className="page-title">Product List</h1>
            <div className="row">
                <div className="col-lg-6">
                    <ProductListItem
                        name="iPhone 8"
                        type="phone"
                        capacity="128"
                        price="500"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                        name="iPhone 12"
                        type="phone"
                        capacity="512"
                        price="1500"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                        name="iPhone X"
                        type="phone"
                        capacity="128"
                        price="1000"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                        name="iPhone XS"
                        type="phone"
                        capacity="64"
                        price="900"
                    />
                </div>
            </div>
        </>    

    )
}

export default ProductList