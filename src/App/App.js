import React, { Component } from 'react'
import '../common/reset.css'
import '../common/base.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'






class App extends Component {

    state  = {
        cartData: {
            count:10,
            price:100
        },
        
    }

    addProductToCart(count,price) {
        this.setState((prevState) => ({
            cartData:{
                count:prevState.cartData.count + count,
                price:prevState.cartData.price + (count * price)
            }
        }))
    }
    render() {
        return (
        <>
            <Header cartData={this.state.cartData}/>
            <button onClick={() => this.addProductToCart(5,1000)}>Add to cart</button>
            <Main productCount={this.state.productCount}/>
            <Footer />	
                
                
        </>
        )
        
    }
    
}

export default App