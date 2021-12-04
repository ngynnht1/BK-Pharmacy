import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    loadingCategories: false,
    brands: [],
    loadingBrands: false,
    products: [],
    loadingProducts: false,
    topProducts: [],
    loadingTopProducts: false,
    popularProducts: [],
    loadingPopularProducts: false,
    newProducts: [],
    loadingNewProducts: false,
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        getCategories: (state, action) => {
          state.loadingCategories = true;
        },
        getCategoriesSuccess: (state, action) => {
          state.categories = action.payload;
          state.loadingCategories = false;
        },
        getBrands: (state, action) => {
          state.loadingBrands = true;
        },
        getBrandsSuccess: (state, action) => {
          state.brands = action.payload;
          state.loadingBrands = false;
        },
        getProducts: (state, action) => {
          state.loadingProducts = true;
        },
        getProductsSuccess: (state, action) => {
          state.products = action.payload;
          state.loadingProducts = false;
        },
        getTopProducts: (state, action) => {
          state.loadingTopProducts = true;
        },
        getTopProductsSuccess: (state, action) => {
          state.loadingTopProducts = false;
          state.topProducts = action.payload;
        },
        getPopularProducts: (state, action) => {
          state.loadingPopularProducts = true;
        },
        getPopularProductsSuccess: (state, action) => {
          state.loadingPopularProducts = false;
          state.popularProducts = action.payload;
        },
        getNewProducts: (state, action) => {
          state.loadingNewProducts = true;
        },
        getNewProductsSuccess: (state, action) => {
          state.loadingNewProducts = false;
          state.newProducts = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
  getCategories,
  getCategoriesSuccess,
  getBrands,
  getBrandsSuccess,
  getProducts,
  getProductsSuccess,
  getTopProducts,
  getTopProductsSuccess,
  getPopularProducts,
  getPopularProductsSuccess,
  getNewProducts,
  getNewProductsSuccess,
} = dataSlice.actions

export default dataSlice.reducer
