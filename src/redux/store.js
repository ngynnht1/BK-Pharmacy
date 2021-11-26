import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import productModalReducer from './product-modal/productModalSlice'

import cartItemsReducer from './shopping-cart/cartItemsSlide'
import dataReducer from './data/dataSlice'

const reducer = combineReducers({
    productModal: productModalReducer,
    cartItems: cartItemsReducer,
    data: dataReducer,
})

export const store = configureStore({
    reducer,
})
