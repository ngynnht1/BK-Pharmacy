import Footer from './Footer'
import Header from './Header'
import ProductViewModal1 from './ProductViewModal1'
import React from 'react'
import { Route } from 'react-router-dom'
import Routes from '../routes/Routes'
import {
    getCookie,
} from '../utils/localStorageHelper';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { validateJWTAction } from '../redux/authentication/actions'

// import Bill from './Bill'


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
    )
}

export default Layout
