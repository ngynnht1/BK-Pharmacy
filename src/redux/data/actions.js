import {
  getCategories,
  getCategoriesSuccess,
  getBrands,
  getBrandsSuccess,
  getProducts,
  getProductsSuccess,
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
    console.log('categories', categories);
    console.log('brands', brands);
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
