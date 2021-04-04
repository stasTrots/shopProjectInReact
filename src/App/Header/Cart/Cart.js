import React from 'react'
import './cart.css'

import { Link } from 'react-router-dom'





const Cart = () => {
 
    return (
        <div className="cart text-center">
            
            <Link to="/cart">Show cart</Link>
        </div>
    )
}

export default Cart