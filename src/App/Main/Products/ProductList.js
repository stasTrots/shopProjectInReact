import React from 'react'
import ProductListItem from "./ProductListItem"
import products from './Products'


const ProductList = ({productCount}) => {
    console.log(productCount)
    return (
        <>
            <h1 className="page-title">Product List</h1>
            <div className="row">
                {
                    products.map(({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image
                        
                    }) => (
                        <div className="col-lg-6" key={id}>
                            <ProductListItem
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                
                            />
                        </div>
                    ))
                }

                
                
            </div>
        </>    

    )
}

export default ProductList