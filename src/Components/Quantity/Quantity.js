import React from 'react'


const Quantity = ({
    productCount,
    onIncrementClick,
    onDecrementClick
}) => {
    
        return (
            <div className="product-quantity">
                    <button className="decrement-button" disabled={productCount <=1}
                    onClick={() => onDecrementClick()}>-</button>
                    <input type="text" value={productCount} readOnly/>
                    <button className="increment-button"
                    onClick={() => onIncrementClick()}>+</button>
                </div>
        )
    
}

export default Quantity