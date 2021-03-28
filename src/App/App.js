import React, { Component } from 'react'
import '../common/reset.css'
import '../common/base.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'






class App extends Component {

    state  = {
        cartData: {
            count:1,
            price:100
        },
        
    }

    addProductToCart = (count,price) => {
        this.setState((prevState) => ({
            cartData:{
                productCount:prevState.cartData.count + count,
                price:prevState.cartData.price + (count * price)
            }
        }))
    } 
    render() {
        return (
        <>
            <Header cartData={this.state.cartData}/>
            <Main 
             addProductToCart={this.addProductToCart}
           />
            <Footer />	
                
                
        </>
        )
        
    }
    
}

export default App