import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    loadingCategories: false,
    brands: [],
    loadingBrands: false,
    products: [],
    loadingProducts: false,
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
        }
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
} = dataSlice.actions

export default dataSlice.reducer
