import React, { Component } from 'react'
import '../common/reset.css'
import '../common/base.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'






class App extends Component {

    state  = {
        
        productsInCart: {
           
            
        }
    }

    addProductToCart = (id,count) => { 
        this.setState((prevState) => ({
            
            productsInCart:{
                ...prevState.productsInCart,
                [id]:(prevState.productsInCart[id] || 0) + count
                
            }
        }))
    } 
    render() {
        return (
        <>
            <Header />
            {/* <button onClick={() => this.addProductToCart(2,5)}>Add to cart</button> */}
            <Main 
            productsInCart={this.state.productsInCart}
            addProductToCart={this.addProductToCart}
           />
            <Footer />	
                
                
        </>
        )
        
    }
    
}

export default App