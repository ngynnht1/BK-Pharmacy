import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: {},
    checkingOut: false,
    draftOrder: undefined,
    userOrders: [],
    selectedOrder: undefined,
}

export const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const newQuantity = (state.cart[newItem.product?.id]?.quantity ?? 0) + newItem.quantity;
                state.cart[newItem.product?.id] = {
                    ...(state.cart[newItem.product?.id] ?? {}),
                    ...newItem,
                    quantity: newQuantity
                }
        },
        updateItem: (state, action) => {
            const newItem = action.payload
            if (newItem.quantity === 0 && state.cart[newItem.product?.id]) {
                delete state.cart[newItem.product?.id];
            } else {
                state.cart[newItem.product?.id] = {
                    ...(state.cart[newItem.product?.id] ?? {}),
                    ...newItem,
                }
            }
        },
        removeItem: (state, action) => {
            const item = action.payload
            if (state.cart[item.product?.id]) {
                delete state.cart[item.product?.id];
            }
        },
        checkout: (state, action) => {
            state.checkingOut = true;
        },
        checkoutSuccess: (state, action) => {
            state.checkingOut = false;
            state.draftOrder = undefined;
            state.cart = {};
        },
        saveOrder: (state, action) => {
            state.draftOrder = action.payload;
        },
        getOrdersSuccess: (state, action) => {
            state.userOrders = action.payload;
        },
        selectUserOrder: (state, action) => {
            state.selectedOrder = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateItem, checkout, checkoutSuccess, saveOrder, getOrdersSuccess, selectUserOrder } = cartItemsSlice.actions

export default cartItemsSlice.reducer
