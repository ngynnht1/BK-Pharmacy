import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
// import Bill from './Bill'

import Routes from '../routes/Routes'
import ProductViewModal1 from './ProductViewModal1'
import { useEffect } from 'react';
import {
    getCookie,
} from '../utils/localStorageHelper';
import { useDispatch } from 'react-redux'
import { validateJWTAction } from '../redux/authentication/actions'

const Layout = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const jwt = getCookie('jwt');
        if (jwt && jwt !== '') {
            console.log('jwt', jwt);
            dispatch(validateJWTAction(jwt));
        }
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <Header {...props}/>
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
