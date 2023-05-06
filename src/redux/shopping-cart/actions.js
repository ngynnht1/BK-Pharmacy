import api, { ghnApi } from '../../api';
import {
  checkout,
  checkoutSuccess,
  getDistricts as getDistrictsReducer,
  getDistrictsSuccess,
  getOrdersSuccess,
  getProvinces as getProvincesReducer,
  getProvincesSuccess,
  getServicesSuccess,
  getWards as getWardsReducer,
  getWardsSuccess,
  selectService as selectServiceReducer,
  selectServiceSuccess,
  selectWard as selectWardReducer,
} from './cartItemsSlide';

export const createOrder = (userInfo, orders, totalAmount) => async dispatch => {
  try {
    dispatch(checkout());
    console.log('userInfo', userInfo);
    console.log('orders', orders);
    console.log('totalAmount', totalAmount);
    await api.post('/order/create.php', {
      user_id: userInfo.user_id,
      email: userInfo.email,
      name: userInfo.name,
      phone: userInfo.phone,
      address: userInfo.address,
      order_items: orders,
      total_amount: totalAmount,
    })
      .then((_response) => {
        console.log('_response', _response);
        dispatch(checkoutSuccess());
      });
  } catch (e) {
    console.log(e);
  }
}

export const getUserOrders = (userId) => async dispatch => {
  try {
    await api.post('/order/read.php', {
      user_id: userId
    })
    .then((response) => {
      dispatch(getOrdersSuccess(response.data.data));
    });
  } catch (e) {
    console.log(e);
  }
}

export const getProvinces = () => async dispatch => {
  try {
    dispatch(getProvincesReducer())
    await ghnApi.get('/master-data/province')
    .then((res) => {
      console.log('res', res)
      console.log('data', res.data.data)
      dispatch(getProvincesSuccess(res.data.data))
    })
  } catch (e) {
    console.log('e prov', e)
  }
}

export const getDistricts = (provinceId) => async dispatch => {
  try {
    dispatch(getDistrictsReducer(provinceId))
    await ghnApi.get(`/master-data/district?province_id=${provinceId}`)
    .then((res) => {
      console.log('res d', res)
      console.log('data d', res.data.data)
      dispatch(getDistrictsSuccess(res.data.data))
    })
  } catch (e) {
    console.log('e prov', e)
  }
}

export const getWards = (districtId) => async dispatch => {
  try {
    dispatch(getWardsReducer(districtId))
    await ghnApi.get(`/master-data/ward?district_id=${districtId}`)
    .then((res) => {
      console.log('res w', res)
      console.log('data w', res.data.data)
      dispatch(getWardsSuccess(res.data.data))
    })
  } catch (e) {
    console.log('e prov', e)
  }
}

export const selectWard = (wardId) => async dispatch => {
  dispatch(selectWard(wardId))
}

export const getServices = (wardId, districtId) => async dispatch => {
  try {
    dispatch(selectWardReducer(wardId))
    await ghnApi.get(`/v2/shipping-order/available-services?shop_id=124102&from_district=1452&to_district=${districtId}`)
    .then((res) => {
      console.log('res s', res)
      console.log('data s', res.data.data)
      dispatch(getServicesSuccess(res.data.data))
    })
  } catch (e) {
    console.log('e serv', e)
  }
}

export const selectService = (serviceId, toDistrictId) => async dispatch => {
  try {
    dispatch(selectServiceReducer(serviceId))
    const param = `shop_id=124102&from_district_id=1452&to_district_id=${toDistrictId}&service_id=${serviceId}&height=10&width=10&weight=200`
    await ghnApi.get(`/v2/shipping-order/fee?${param}`)
    .then((res) => {
      console.log('res selectService', res)
      console.log('data selectService', res.data.data)
      dispatch(selectServiceSuccess(res.data.data))
    })
  } catch (e) {
    console.log('e selectService', e)
  }
}