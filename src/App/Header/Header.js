import React from 'react'


import './header.css'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Card from './Cart/Cart'

const Header = () => {
    return (
        <header class="header">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                               <Logo/> 
                            </div>
                            <div class="col-lg-6">
                                <Menu/>
                            </div>
                            <div class="col-lg-3">
                                <Cart/>
                            </div>
                        </div>
                    </div>
                </header>
    )
}

export default Header