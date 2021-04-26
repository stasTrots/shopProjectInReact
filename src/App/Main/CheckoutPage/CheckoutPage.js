import axios from 'axios'
import React, { Component } from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import {keys} from 'lodash'
import products, { getProductsObject } from '../Products/Products'
import './CheckoutPage.css'
import {connect} from 'react-redux'

class CheckoutPage extends Component {
    state = {
        name:"",
        address:"",
        phone:"",
        message:"",
        nallik:false,
        karta:false,
        isOrderSend:false
    }
    orderName= (e) => {
        this.setState({
            name:e.target.value,
        })
    }
    orderPhone = (e) => {
        this.setState({
            phone:e.target.value
        })
    } 
    orderAddress= (e) => {
        this.setState({
            address:e.target.value,
        })
    }
    orderMessage = (e) => {
        this.setState({
            message:e.target.value
        })
    } 
    orderNal = (e) => {
        this.setState((pervState) => ({
            nallik:!pervState.nallik,
            karta:pervState.nallik
        }))
    } 
    orderKart = (e) => {
        this.setState((pervState) => ({
            karta:!pervState.karta,
            nallik:pervState.karta
        }))
    } 
    onSend = (e) => {
        e.preventDefault();
        axios.post('https://my-json-server.typicode.com/kznkv-skillup/server/orders',
        {
            name:this.state.name,
            address:this.state.address,
            phone:this.state.phone,
            message:this.state.message,
            nallik:this.state.nallik,
            karta:this.state.karta,
            productsInCart:this.props.productsInCart
        })
        .then(res => res.data)
        .then(({
            name,
            address,
            phone,
            message,
            nallik,
            karta,
        }) => this.setState({
            name,
            address,
            phone,
            message,
            nallik,
            karta,
            isOrderSend:true
        }))
    }
    
    renderForm = () => {
        const  {
            productsInCart,
            productsObject = getProductsObject(products),
        } = this.props
        
        
        return(
            <form onSubmit={this.onSend}>
                <div>
                    <h1 className="page-title">Your Checkout</h1>
                </div>
                <div>
                    {
                        keys(productsInCart).map(id=>(
                            <div key={id}>
                                <h3 className="product-check">- {productsObject[id].name} : {productsInCart[id]}</h3>
                            </div>
                        ))
                    }
                    <CartTotal
                    productsInCart={productsInCart}
                    />
                </div>
                <div className="form-pos">
                    <div>
                        <input type="text"
                        placeholder="You name"
                        value={this.state.name}
                        onChange={this.orderName} 
                        className="input-check"/>
                    </div>
                    <div>
                        <input type="text"
                        placeholder="You address"
                        value={this.state.address}
                        onChange={this.orderAddress}
                        className="input-check" />
                    </div>
                    <div>
                        <input type="number"
                        placeholder="You number"
                        value={this.state.phone}
                        onChange={this.orderPhone}
                        className="input-check" />
                    </div>
                    <div className="checkbox">
                        <label className="checkbox-checkout">
                            <input type="radio"
                            name="oplata" 
                            value={this.state.nallik}
                            onChange={this.orderNal} />
                            <span> Nalichka</span>
                        </label>
                        <label className="checkbox-checkout">
                            <input type="radio" 
                            name="oplata" 
                            value={this.state.karta}
                            onChange={this.orderKart} />
                            <span> Karta</span>
                        </label>
                    </div>
                    
                    <div>
                        <textarea
                        placeholder="Write message"
                        value={this.state.message}
                        onChange={this.orderMessage}
                        className="textrea-check"/>
                    </div>
                    <button type="submit">send</button>
                </div>
            </form>
        )
    }

    renderMessage = () => {
        return (
            <div className="after-form">
                Dear {this.state.name}, thanks for you order!
                <p>Address: {this.state.address}</p>
                <p>Number: {this.state.phone}</p>
                {this.state.nallik === true ? <span>Oplata nalom</span> : <span>Oplata kartoy</span>}
            </div>
        )
    }


    
    render() {
        return(
            <>
                <h1 className="page-title">Checkout</h1>
                {this.state.isOrderSend !== true ? this.renderForm() :
                this.renderMessage()}
            </>
        )
    }
}

const mapState = (state) => ({
    productsInCart:state.productsInCart
})
export default connect(
    mapState,
)(CheckoutPage)