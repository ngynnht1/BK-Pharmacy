import { Route, Switch } from 'react-router-dom'

import Accessories from '../pages/Accessories'
import Bill from '../components/Bill'
import Cart from '../pages/Cart'
import DeliveryPoli from '../pages/DeliveryPoli'
import Home from '../pages/Home'
import Introduction from '../pages/Introduction'
import OrderCard from '../components/OrderCard'
import Product1 from '../pages/Product1'
import Profile from '../components/Profile'
import React from 'react'

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
            <Route path='/OrderCard' component={OrderCard}/>
        </Switch>
    )
}

export default Routes
