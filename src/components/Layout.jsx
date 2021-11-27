import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Bill from './Bill'

import Routes from '../routes/Routes'
import ProductViewModal1 from './ProductViewModal1'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <Header {...props}/>
                    <Bill/>
                    <div className="container">
                        <div className="main">
                            <Routes/>
                        </div>
                    </div>
                    <Footer/>
                    <ProductViewModal1/>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
