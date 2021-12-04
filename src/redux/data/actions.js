import {
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
} from './dataSlice'
import api from '../../api';

export const fetchCategories = () => async dispatch => {
  try {
    dispatch(getCategories());
    await api.get('/category/read.php')
      .then((response) => dispatch(getCategoriesSuccess(response.data.data)))
  }
  catch (e) {
    console.log(e)
  }
}

export const fetchBrands = () => async dispatch => {
  try {
    dispatch(getBrands());
    await api.get('/brand/read.php')
      .then((response) => dispatch(getBrandsSuccess(response.data.data)))
  }
  catch (e) {
    console.log(e)
  }
}

export const fetchProducts = (categories, brands) => async dispatch => {
  try {
    dispatch(getProducts());
    await api.get('/product/read.php', {
      params: {
        category_ids: categories ?? [],
        brand_ids: brands ?? [],
      }
    })
      .then((response) => dispatch(getProductsSuccess(response.data ?? [])))
  }
  catch (e) {
    console.log(e)
  }
}

export const fetchTopProducts = (categories, brands) => async dispatch => {
  try {
    dispatch(getTopProducts());
    await api.get('/product/readTopProducts.php', {
      params: {
        category_ids: categories ?? [],
        brand_ids: brands ?? [],
      }
    })
      .then((response) => dispatch(getTopProductsSuccess(response.data ?? [])))
  }
  catch (e) {
    console.log(e)
  }
}

export const fetchPopularProducts = (categories, brands) => async dispatch => {
  try {
    dispatch(getPopularProducts());
    await api.get('/product/readPopularProducts.php', {
      params: {
        category_ids: categories ?? [],
        brand_ids: brands ?? [],
      }
    })
      .then((response) => dispatch(getPopularProductsSuccess(response.data ?? [])))
  }
  catch (e) {
    console.log(e)
  }
}

export const fetchNewProducts = (categories, brands) => async dispatch => {
  try {
    dispatch(getNewProducts());
    await api.get('/product/readNewProducts.php', {
      params: {
        category_ids: categories ?? [],
        brand_ids: brands ?? [],
      }
    })
      .then((response) => dispatch(getNewProductsSuccess(response.data ?? [])))
  }
  catch (e) {
    console.log(e)
  }
}
