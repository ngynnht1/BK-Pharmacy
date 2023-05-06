import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: {},
    checkingOut: false,
    draftOrder: undefined,
    userOrders: [],
    selectedOrder: undefined,
    provinces: [],
    districts: [],
    wards: [],
    selectedProvice: undefined,
    selectedDistrict: undefined,
    selectedWard: undefined,
    services: [],
    selectedService: undefined,
    calculatedFee: undefined,
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
          console.log('action', action)
            state.draftOrder = action.payload;
        },
        getOrdersSuccess: (state, action) => {
            state.userOrders = action.payload;
        },
        selectUserOrder: (state, action) => {
            state.selectedOrder = action.payload;
        },
        getProvinces: (state, action) => {
          state.provinces = [];
          // state.selectedProvice = undefined
          state.selectedDistrict = undefined
          state.selectWard = undefined
          state.selectedService = undefined
          state.calculatedFee = undefined
        },
        getProvincesSuccess: (state, action) => {
          state.provinces = action.payload
          state.districts = [];
          state.wards = [];
        },
        getDistricts: (state, action) => {
          state.selectedProvince = action.payload
          console.log('state.selectedProvince', state.selectedProvince)
          state.selectedDistrict = undefined
          state.selectedWard = undefined
          state.districts = []
          state.wards = []
          state.services = []
          state.selectedService = undefined
          state.calculatedFee = undefined
        },
        getDistrictsSuccess: (state, action) => {
          state.districts = action.payload
        },
        getWards: (state, action) => {
          console.log('action', action)
          state.selectedDistrict = action.payload
          state.wards = []
          state.services = []
          state.selectedService = undefined
          state.calculatedFee = undefined
          console.log('state',state.selectedDistrict)
        },
        getWardsSuccess: (state, action) => {
          state.wards = action.payload
        },
        selectWard: (state, action) => {
          state.selectedWard = action.payload
          state.services = []
          state.selectedService = undefined
          state.calculatedFee = undefined
        },
        getServicesSuccess: (state, action) => {
          state.services = action.payload
        },
        selectService: (state, action) => {
          state.selectedService = action.payload
          state.calculatedFee = undefined
        },
        selectServiceSuccess: (state, action) => {
          state.calculatedFee = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
  addItem,
  removeItem,
  updateItem,
  checkout,
  checkoutSuccess,
  saveOrder,
  getOrdersSuccess,
  selectUserOrder,
  getProvinces,
  getProvincesSuccess,
  getDistricts,
  getDistrictsSuccess,
  getWards,
  getWardsSuccess,
  selectWard,
  getServicesSuccess,
  selectService,
  selectServiceSuccess,
} = cartItemsSlice.actions

export default cartItemsSlice.reducer
