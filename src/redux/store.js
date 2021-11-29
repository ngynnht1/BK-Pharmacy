import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import productModalReducer from './product-modal/productModalSlice';

import cartItemsReducer from './shopping-cart/cartItemsSlide';
import dataReducer from './data/dataSlice';
import authenticationReducer from './authentication/authenticationSlice';

const reducer = combineReducers({
    auth: authenticationReducer,
    productModal: productModalReducer,
    cartItems: cartItemsReducer,
    data: dataReducer,
})

export const store = configureStore({
    reducer,
})
