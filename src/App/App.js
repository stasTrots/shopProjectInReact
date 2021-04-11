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
    removeProductFromCart = (productId) => {
       this.setState((prevState) => {
           let prevProductsInCart = {...prevState.prevProductsInCart}

           delete prevProductsInCart[productId]

           return {
               productsInCart:prevProductsInCart
           }
       })
    }
    render() {
        return (
        <>
            <Header 
            productsInCart={this.state.productsInCart}/>
            {/* <button onClick={() => this.removeProductFromCart(1)}>Add to cart</button> */}
            <Main 
            productsInCart={this.state.productsInCart}
            addProductToCart={this.addProductToCart}
            removeProductFromCart={this.removeProductFromCart}
           />
            <Footer />	
                
                
        </>
        )
        
    }
    
}

export default App