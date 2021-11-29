import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'

import Cart from '../pages/Cart'
import DeliveryPoli from '../pages/DeliveryPoli'

import Accessories from '../pages/Accessories'
import Product1 from '../pages/Product1'
import Introduction from '../pages/Introduction'
import Bill from '../components/Bill'
import Profile from '../components/Profile'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Introduction' component={Introduction}/>
            <Route path='/DeliveryPoli' component={DeliveryPoli}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/accessories' component={Accessories}/>
            <Route path='/accessories/:slug' component={Product1}/>
            <Route path='/Bill' component={Bill}/>
            <Route path='/Profile' component={Profile}/>


        </Switch>
    )
}

export default Routes
